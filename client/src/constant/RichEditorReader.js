import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {Editor, EditorState, convertFromRaw} from 'draft-js'
import {ProfileContext} from '../context/ProfileContext'
import '../../../node_modules/draft-js/dist/Draft.css'
import 'draft-js/dist/Draft.css'
import '../RichText.css'

const RichEditorReader = () => {
    const {profile} =useContext(ProfileContext)

    const contentState = convertFromRaw(JSON.parse(profile.statement));
    const editorState = EditorState.createWithContent(contentState);


    return (
        <Container >
            <Editor editorState={editorState}/>
        </Container>
    )
}

export default RichEditorReader


const Container = styled.div`
    margin-top:20px;
`