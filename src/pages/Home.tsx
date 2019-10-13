import React from 'react';
import Header from '../components/Header';
import Styled from '@emotion/styled';
import MainImage from '../static/main.png';
import { baseColor, baseBackgroundColor } from '../constant';
import Select from 'react-select';
import useSelect from '../utils/useSelect';
import { RouteComponentProps } from '@reach/router';

const Home = ({ handleSubmit, error }: RouterProps) => {
  const [
    input,
    setInput,
    optionsList,
    selectedOption,
    handleChange
  ]: any = useSelect();

  return (
    <div>
      <Header homePage={true} />
      <Container>
        <Content>
          <Title>E-Health Medical System</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            consequatur, consectetur facere totam odio iusto, eos tempore fugiat
            nemo laudantium vitae iste!
          </p>
          <FromSearch
            onSubmit={e => handleSubmit(e, selectedOption.value, input)}
            style={{ flexBasis: '20%' }}
          >
            <p>Search by:</p>
            <Select
              options={optionsList}
              onChange={handleChange}
              value={selectedOption}
            />
            <SearchInput
              type="text"
              placeholder="Search here"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </FromSearch>
          <p>{error && error}</p>
        </Content>
        <ImageContainer>
          <img src={MainImage} alt="Main" />
        </ImageContainer>
      </Container>
    </div>
  );
};

export default Home;

//  START: Types

interface RouterProps extends RouteComponentProps {
  handleSubmit: SearchHandlerProps;
  error: string | null;
}

type SearchHandlerProps = (
  e: any,
  selectedOption: string,
  input: string
) => void;

//  END: Types

//  CSS in JavaScript Components : EmotionJS.

const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  margin: 250px auto;
  p {
    color: #aaaaaa;
    font-size: 1rem;
  }
  @media screen and (max-width: 1250px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    padding: 0px 20px;
  }
`;

const Content = Styled.div`
  flex-basis: 50%;
  @media screen and (max-width: 1250px) {
    flex-basis: 100%;
  }
`;
const Title = Styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${baseColor};
`;

export const FromSearch = Styled.form`
  width: 100%;
  background-color: ${baseBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #aaaaaa;
  font-size: 17px;
  padding: 0;
  padding-left: 40px;
  height: 70px;
  filter: drop-shadow(1px 1px 5px #ccc);
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;

  p {
    flex-basis: 14%;
    padding: 10px 0;
    font-size: 0.9rem;
    @media screen and (max-width: 850px) {
      min-width: 60px;
    }
  }

  div {
    flex-basis: 25%;
    min-width: 50px;
    font-size: 0.9rem;
    border: none;
    color: #999;
    &:active, &:focus {
      border: 0;
    }
    span {
      display: none;
    }
  }

  @media screen and (max-width: 850px) {
    padding-left: 20px;
  }
`;

export const Selected = Styled.select`
  flex-basis: 20%;
  padding: 10px;
  margin-right:10px;
  border: 0;
  vertical-align: middle;
  background: #fff;
  background-size: 8px 10px;
  font-size: 0.9rem;
  color: inherit;
`;

export const SearchInput = Styled.input`
  padding: 10px;
  font-size: 0.9rem;
  flex-grow: 1;
  border: 0;
  border-left: 0.5px solid #aaa;
  color: #333;
  ::placeholder {
    color: #aaaaaa;
    font-size: 0.9rem;
}
`;

const Button = Styled.button`
  flex-basis: 25%;
  height:100%;
  border: none;
  background-image: linear-gradient(
    to right,
    #00b4f5 0%,
    #00adee 51%,
    #0277a1 100%
  );
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  cursor: pointer;
`;

const ImageContainer = Styled.div`
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1250px) {
      margin-top: 80px;
      flex-basis: 100%;
    }

    img {
      max-width: 500px;
      flex-basis: 100%;
      @media screen and (max-width: 850px) {
        max-width:350px;
      }
    }
}
`;
