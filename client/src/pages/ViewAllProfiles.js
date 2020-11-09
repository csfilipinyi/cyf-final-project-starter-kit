import React, {useContext, useEffect} from 'react'
import { ProfileContext } from '../context/ProfileContext';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components'
import Header from '../components/Header'
import OverviewProfileCard from '../components/OverviewProfileCard'
import Introducing from '../components/Introducing'

const ViewAllProfiles = () => {
    const { allProfiles, getProfile, isLoading, error }= useContext(ProfileContext);

	useEffect(()=>{
		!allProfiles&&getProfile()
	},[])

    return (
		<>{allProfiles&&<Screen>
            <Header />
            <Introducing
				header = 'Welcome to the CodeYourFuture Graduate Directory'				
		  	/>	
			 <Info>In this directory you will find recent graduates from the full-stack program at CodeYourFuture. CodeYourFuture graduates spent approximately 800 hours developing their technical and employability skills.
				Learn more about the syllabus <LinkCYF href='https://syllabus.codeyourfuture.io/overview'>here</LinkCYF>
			</Info> 
			<Info>If you see a likely candidate please contact the graduate directly. If you would like to have a broader conversation about your hiring needs, we’d love to chat - contact us at <span> </span>
			<LinkCYF href='mailto:contact@codeyourfuture.io'> contact@codeyourfuture.io</LinkCYF>
			</Info>
            <Container>
				{isLoading ? 
					<p>Loading...</p>
					: allProfiles && allProfiles.map(( profile, i ) => {
						return <OverviewProfileCard singleProfile={ profile } getProfile={getProfile} key={ i } />
					})}
				{error && <p>{error}</p>}
			</Container>
        </Screen>}
		</>
    )
}

export default ViewAllProfiles

const Screen =styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
`;

const Container = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	width:75%;
`;

const Text = styled.p`
	font-size:20;
`;

const Info = styled.p`
	width:70%;
`

const LinkCYF =styled.a`
	display:inline-block;
`