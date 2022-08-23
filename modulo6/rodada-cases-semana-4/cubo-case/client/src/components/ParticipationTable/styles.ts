import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
    height: fit-content;

    thead {
        th {
            width: 150px;

            :not(:first-child):not(:last-child) {
                text-align: left;
            };

            :first-child {
                width: 30px;
            };
        };
    };

    tbody {
        tr {
            td {
                :first-child, :last-child {
                    text-align: center;
                };

                :nth-child(2) {
                    &:hover {
                        color: black;
                        font-weight: 500;
                        cursor: pointer;
                    };
                };
            };
        };
    };

    td, th {
        border: 1px solid gray;
        padding: 0.5rem;
        color: gray;
    };
`;