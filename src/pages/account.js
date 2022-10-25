<Grid container spacing={2} marginTop='15px'>
        <Grid item sm={2}>
            <Card sx={{border:1,borderRadius:2,borderColor:'#dddddd', boxShadow:'none',}}>
            <CardContent >
            <Grid container spacing={2}  >
        <Grid item sm={12 } >
          <Avatar sx={{borderRadius:2, height:'20vh', width:'20vh',backgroundColor:'#284831',marginLeft:4}}>
            FM
          </Avatar>
            <Typography textAlign={'center'}> name</Typography>
            <Typography textAlign={'center'}>personal profile</Typography>
           </Grid>
           <Grid item  sm={12}>
                    <Link
                      href="#"
                      color="#284831"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 700,
                        paddingLeft: 1,
                      }}
                    >
                      profile
                    </Link>
                    </Grid>
                    <Grid  item sm={12} >
                    <Link
                      href="#"
                      color="#284831"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 700,
                        paddingLeft: 1,
                      }}
                    >
                      Login Details
                    </Link>
                    </Grid>
                    <Grid item sm={12} >
                    <Link
                      href="#"
                      color="#284831"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 700,
                        paddingLeft: 1,
                      }}
                    >
                      Horses
                    </Link>
                    </Grid>
                    <Grid item  sm={12} >
                    <Link
                      href="#"
                      color="#284831"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 700,
                        paddingLeft: 1,
                      }}
                    >
                      Logout
                    </Link>
                    </Grid>
                    </Grid>
          </CardContent>
            </Card>
        </Grid>
        </Grid>
              </Grid>