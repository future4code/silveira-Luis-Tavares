import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [handleCommentInput, setHandleCommentInput] = useState("");

	const onChangeComentario = (event) => {
		setHandleCommentInput(event.target.value);
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={handleCommentInput}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(handleCommentInput) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario