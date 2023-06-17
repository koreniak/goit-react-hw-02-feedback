import styled from '@emotion/styled';

export const CounterBtn = styled.button`
  min-width: 160px;
  padding: 16px 32px;

	&:not(:last-child) {
  	margin-right: 12px;
	}

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-align: center;
	text-transform: capitalize;

  cursor: pointer;

  background-color: #4D5AE5;
  color: #F4F4FD;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: #404BBF;
	}
`;

export const CounterField = styled.div`
	display: inline-block;
	padding: 8px;
`;