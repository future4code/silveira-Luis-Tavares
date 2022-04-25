import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [liked, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commenting, setCommenting] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const [comments, setComments] = useState([]);
  
  const onClickCurtida = () => {
    if(liked) {
      setLike(!liked);
      setLikesCount(likesCount - 1);
      
    } else {
      setLike(!liked);
      setLikesCount(likesCount + 1);

    }
  };

  const onClickComentario = () => {
    setCommenting(!commenting);
  };

  const enviarComentario = (comentario) => {
    const newComment = [...comments, comentario];

    setComments(newComment);
    setCommentsCount(commentsCount + 1);
    setCommenting(false);
  }

  const iconeCurtida = liked ? (iconeCoracaoPreto) : (iconeCoracaoBranco);

  const caixaDeComentario = commenting ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    comments.map((comment) => {
      return (
        <CommentContainer>
          <p>{comment}</p>
        </CommentContainer>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={likesCount}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={commentsCount}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post