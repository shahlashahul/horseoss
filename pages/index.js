import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from '@mui/material/Link';
import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'



export default function Home() {
  return (
    <Layout>
      <Grid container sx={{backgroundImage:'url("/dw-bg.png")',height:120,}}>
      <Grid xs={8} md={12} >
      
     <Typography variant='h5' sx={{color:'white' ,marginLeft:7,paddingTop:2}}>Terms and Conditions</Typography>
     
     <Link href="#" underline="none"><Typography variant='h6'  sx={{display: 'inline-block' , paddingRight:'10px', color:'white' ,marginLeft:7.5, fontSize:14}}>Home</Typography></Link>
     <Typography variant='h6' sx={{display: 'inline-block' , paddingRight:'10px', color:'white',fontSize:14}}>|</Typography>
     
     <Link href="#" underline="none"> <Typography variant='h6'sx={{display: 'inline-block', paddingRight:'10px', color:'gold',fontSize:14}}>Terms and Conditions</Typography></Link>
     
      
      
      </Grid>    
    
   </Grid>
   <Grid container >
    <Grid item xs={8} md={12} sx={{marginLeft:7}}>
   <Typography variant ='h3'sx={{fontSize:'25px',marginTop:5,}}>Terms of Agreement</Typography>
   <Typography sx={{fontSize:'15px',marginTop:3}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloribus beatae itaque sunt, ab rem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt asperiores voluptates dolorem et delectus, unde culpa, corporis illo fugit sequi voluptate neque! Reiciendis repellat tenetur similique hic assumenda dolores deleniti aliquam quos obcaecati impedit officiis, amet ipsum optio, sapiente quasi aperiam nihil inventore nam aliquid! Ut voluptatem voluptates aliquid.</Typography>
    <Typography variant ='h3'sx={{fontSize:'25px',marginTop:3}}>Modification of Terms</Typography>
    <Typography sx={{fontSize:'15px',marginTop:3}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum reiciendis eveniet cupiditate eos maiores iste fugiat itaque perspiciatis veritatis obcaecati accusantium, commodi consectetur nulla fugit laborum culpa odio hic amet cum quaerat provident inventore aliquam. Minus optio exercitationem autem esse vitae qui nesciunt similique dicta in nemo. Quis, earum et.</Typography>
    <Typography sx={{fontSize:'15px',marginTop:3}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi aliquid adipisci amet doloremque necessitatibus eum voluptatibus, repudiandae at quisquam expedita, dolor dolorum voluptatem quaerat assumenda temporibus mollitia harum reprehenderit!</Typography>
    <Typography variant ='h3'style={{fontSize:'25px',marginTop:17}}>Copyrights and Trademark</Typography>
    <Typography sx={{fontSize:'15px',marginTop:3}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa eaque, nostrum perferendis voluptatibus, esse aliquid a minima, quo nesciunt harum porro sunt consequatur soluta necessitatibus doloribus in repellendus voluptas hic placeat dolores adipisci? Adipisci ea provident suscipit iusto, ex minima repellat excepturi amet tenetur nobis, distinctio blanditiis, molestias laudantium dignissimos.</Typography>
    <Typography variant ='h3'sx={{fontSize:'25px',marginTop:3}}>Condition of Carriage</Typography>
    <Typography sx={{fontSize:'15px',marginTop:3}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dignissimos.</Typography>
    <Typography sx={{fontSize:'15px',marginTop:3}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae aliquam asperiores nihil vero, vel nesciunt dolorem, eum, sint voluptatibus molestiae pariatur omnis? In mollitia facilis, repellat natus perspiciatis nesciunt voluptatum quisquam rem atque qui ducimus.</Typography>
   </Grid>
   </Grid>
  
   
    </Layout>
  )
}
