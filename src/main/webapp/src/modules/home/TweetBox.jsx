import React from 'react';
import styled from "styled-components";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate"
import {Gif} from "@material-ui/icons";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";

const TweetBox = () => {
    return (
            <Form>
                <DivBox>
                    <Avatar
                        src={null}
                        size="large"
                    />
                    <Box>
                        <input placeholder="What's happening?" />
                        <Div>
                            <div>
                                <AddPhotoIcon  />
                                <GifIcon />
                            </div>
                            <Button text="Tweet" />
                        </Div>
                    </Box>
                </DivBox>
            </Form>
    );
};

export default TweetBox;

const Box = styled.div`
    width: 100%;
    margin-left: 15px;
    
    >input {
       width: 100%;
       margin-left: 10px;
       margin-top: 10px;
       border: none;
       outline: none;
       font-size: 19px;
       line-height: 25px;
       color: var(--gray);
    }
`;

const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 40px;
    
    >Button {
        height: 37px !important;
        width: 80px;
    }
`;

const DivBox = styled.div`
    padding: 15px 15px;
    display: flex;
    with: 100%;
    height: 14vh;
    border-bottom: 1px solid var(--black);
`;



const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const AddPhotoIcon = styled(AddPhotoAlternateIcon)`
    color: var(--mainColor);
    transform: scale(1.4);
    margin-right: 8px;
`;

const GifIcon = styled(Gif)`
    color: var(--mainColor);
    transform: scale(1.6);
    margin-right: 8px;
`;


