import React from 'react';
import Card from './Card';

const Post = () => {
  return (
    <>
        <div style={{width:'1000px',margin:'auto',marginTop:'25px',marginBottom:'25px'}}>
            <Card>
                <div style={{width:'300px',borderRadius:'7px',background:'#e9e9e9',border:'2px solid #0a0a0a',display:'inline-block',padding:'10px',marginRight:'10px'}}>
                    <h3 style={{textAlign:'center'}}>Rohan Mostofa</h3>
                    <p style={{textAlign:'center'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet adipisci soluta cum dignissimos obcaecati nobis pariatur. Dolorem dolorum exercitationem dicta.</p>
                </div>
            </Card>

            <Card>
                <div style={{width:'300px',borderRadius:'7px',background:'#e9e9e9',border:'2px solid #0a0a0a',display:'inline-block',padding:'10px',marginRight:'10px'}}>
                    <h3 style={{textAlign:'center'}}>Rohan Mostofa</h3>
                    <p style={{textAlign:'center'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet adipisci soluta cum dignissimos obcaecati nobis pariatur. Dolorem dolorum exercitationem dicta.</p>
                </div>
            </Card>
        </div>
    </>
  )
}

export default Post;
