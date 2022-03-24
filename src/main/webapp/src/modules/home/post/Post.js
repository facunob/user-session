import React from 'react';
import Avatar from "../../../components/Avatar";
import styled from "styled-components";
import {VerifiedUser} from "@material-ui/icons";
import {ChatBubbleOutline} from "@material-ui/icons";
import {Repeat} from "@material-ui/icons";
import {FavoriteBorder} from "@material-ui/icons";
import {Publish} from "@material-ui/icons";



const Post = () => {



    return (
        <Div>
            <Avatar src={null}  />
            <PostDiv>
                <div>
                    <div>
                        <PostTitle>
                            Faca fnt
                            <span> <VerifiedUserIcon /> </span>
                            <p>@fnt_98</p>
                        </PostTitle>
                        <PostDescription>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque aut deleniti distinctio eius error excepturi explicabo magni minus nesciunt,
                                nulla officiis reiciendis sunt suscipit, totam vitae voluptates. Dolores, ratione.</p>
                        </PostDescription>
                    </div>
                    <PostFooter>
                        <ChatBubbleOutline fontSize="small" />
                        <Repeat fontSize="small" />
                        <FavoriteBorder fontSize="small" />
                        <Publish fontSize="small" />
                    </PostFooter>
                </div>
            </PostDiv>
        </Div>
    );
};

export default Post;

const Div = styled.div`
    padding: 15px;
    border-bottom: 1px solid var(--black);
    margin-top: 5px;
    display: flex;
    align-items: flex-start;
`;

const PostDiv = styled.div`
    padding-left: 15px;
    width: 100%;
    overflow: hidden;
`;

const VerifiedUserIcon = styled(VerifiedUser)`
    font-weight: 600;
    color: var(--mainColor);
    transform: scale(0.7);
    margin-top: 2px;
`;

const PostTitle = styled.h3`
    display: flex;
    align-items: center;
    >p {
        color: var(--black);
    }
`;

const PostDescription = styled.div`
    margin-bottom: 10px;
    margin-top: 8px;
    >p {
        color: var(--gray);
        font-size: 16px:
        line-height: 16px;
    }
`;

const PostFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    transition: all 100ms ease-in;
    
    >*:hover {
        cursor: pointer;
    }
    
    >*:nth-child(1):hover{
        color: var(--mainColor);
    }
    
    >*:nth-child(2):hover{
        color: var(--green);
    }
    
    >*:nth-child(3):hover{
        color: var(--red);
    }
    
    >*:nth-child(4):hover{
        color: var(--mainColor);
    }
    
`;