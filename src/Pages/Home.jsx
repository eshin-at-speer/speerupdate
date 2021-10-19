import React,{useState} from 'react'
import styled from 'styled-components'
import Picker from 'emoji-picker-react';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--Primary-color);
`;
const Maxcontainer = styled.div`
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  h1 {
    font-size: var(--Header-Medium);
    text-transform: capitalize;
    letter-spacing: 0.2rem;
    margin: 1rem 0;
    color: var(--default-black);
  }
  form {
    margin: 2rem;
    display: flex;
    align-items: center;
    width: 800px;
    justify-content: space-between;
    .Emojiupdate {
      font-size: var(--Subtitle-regular);
      text-transform: uppercase;
      font-weight: bold;
    }
    h3 {
      font-size: var(--Subtitle-regular);
      text-transform: uppercase;
    }
    .update {
      width: 500px;
      height: 30px;
      border: none;
      border-bottom: 1px solid black;
      font-size: var(--Subtitle-regular);
      margin: 0 1rem;
    }
    .addupdate {
      width: 130px;
      height: 30px;
      outline: none;
      border: none;
      border-radius: 2rem;
      background-color: var(--Primary-color-light);
      font-size: var(--Subtitle-regular);
      text-transform: capitalize;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      :hover {
        background-color: var(--Seconday-color-light);
      }
    }
  }
`;

const Home = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [update, setupdate] = useState([])
  const [changeupdate, setchangeupdate] = useState(null)
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const handlechange = (e)=>{
    e.preventDefault()
    setupdate([...update, changeupdate ])
  }
  const handleupdatechange = (e)=>{
    setchangeupdate(e.target.value)
  }

  return (
    <Wrapper>
      <Maxcontainer>
        <h1>Add Your Plan</h1>
        <form>
          {chosenEmoji ? (
            <span className="Emojiupdate">Mood: {chosenEmoji.emoji}</span>
          ) : (
            <span className="Emojiupdate">No emoji Chosen</span>
          )}
          <Picker onEmojiClick={onEmojiClick} />
        </form>
        <form>
          <h3>Update:</h3>
          <input onChange={handleupdatechange} type="text" className="update" />
          <button onClick={handlechange} className="addupdate">
            add
          </button>
        </form>
        <form>
          <h3>Blockers:</h3>
          <input type="text" className="update" />
          <button className="addupdate">add</button>
        </form>
        <div className="data">
          Mood:{chosenEmoji && chosenEmoji.emoji}
          <br />
          Update:{update.map((item,index)=>{
            return (
              <>
                <span key={index}>{item}</span>
                <br />
              </>
            );
          })}
        </div>
      </Maxcontainer>
    </Wrapper>
  );
}

export default Home
