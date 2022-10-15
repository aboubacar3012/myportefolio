import { Grid, Card, Text, Link, Button } from '@nextui-org/react';
import React from 'react';
// ReactIcons
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div style={{ backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
      <NavBar />
      <Grid.Container css={{ height: '90vh', alignItems: 'center' }} justify="center">
        <Grid xs={4} md={2}>
          <Card css={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}>
            <Card.Body
              css={{ alignItems: 'center', backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' }}
            >
              <Card.Image
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGqW_2LnLo4lA/profile-displayphoto-shrink_800_800/0/1614266758808?e=1671062400&v=beta&t=Dc3meRevKizWmTJLTUSqc7JFZI__QhAeBqCmXObXokU"
                alt="Default Image"
                css={{ borderRadius: '100px' }}
                width="200px"
                height="200px"
              />
              <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', fontWeight: 'bold', margin: '0px', padding: '0px' }}>Aboubacar</span>
                <span style={{ fontSize: '20px', fontWeight: 'bold', margin: '0px', padding: '0px' }}>Diallo</span>
              </p>
              <Card.Divider css={{ width: '40%' }} />
              <h5>FULLSTACK DEVELOPER</h5>
            </Card.Body>
            <Card.Footer css={{ display: 'flex', justifyContent: 'space-around' }}>
              <Link href="https://www.linkedin.com/in/adiallo3012/" target={'_blank'}>
                <BsLinkedin style={{ fontSize: '25px' }} />
              </Link>
              <Link href="https://github.com/aboubacar3012/" target={'_blank'}>
                <BsGithub style={{ fontSize: '25px' }} />
              </Link>
              <Link href="#" target={'_blank'}>
                <BsFacebook style={{ fontSize: '25px' }} />
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={4} md={2}>
          <Card css={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}>
            <Card.Body>
              <h3>Qui suis je ?</h3>
              <p style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button iconRight={<BsFillJournalBookmarkFill />} auto flat size="sm">
                  MON CV
                </Button>
                <Button iconRight={<GrProjects />} auto size="sm" ghost color="gradient">
                  Projets
                </Button>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate eveniet iusto accusantium
                magni vero inventore voluptatum impedit rerum, amet quibusdam? Veritatis quidem maxime, nostrum animi
                deleniti laborum obcaecati doloremque?
              </p>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Header;
