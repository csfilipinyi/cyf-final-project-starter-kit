export const graduates = () =>{
	let grdats= {
		OBakir90:true,
		csfilipinyi:true,
		Buchraatkeh1984:true,
        FarhanaFKhan:false,
        juditlehoczki:false
    };
	return grdats;
};


export const graduateProfile = (name) =>{
	let graduates= {
        OBakir90:{
            first_name:'Orhan',
            last_name:'Bakir',
            skills:['HTML', 'JavaScript', 'ReactJs', 'NodeJs']
        },
        csfilipinyi:{
            first_name:'Cs',
            last_name:'Flinpinyi',
            skills:['JavaScript', 'ReactJs', 'NodeJs', 'Java']
        },
        Buchraatkeh1984:{
            first_name:'Buchra',
            last_name:'Atkeeh',
            skills:['CSS', 'ReactJs', 'NodeJs', 'ReactNative']
        }
    }
	return graduates[name];
};

