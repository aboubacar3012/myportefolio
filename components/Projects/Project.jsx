import React from 'react';
import { Card, Col, Row, Button, Text, Link } from '@nextui-org/react';
//Icons
import { BsGithub } from 'react-icons/bs';
import { BiCameraMovie, BiLinkExternal } from 'react-icons/bi';
const Project = (props) => {
  return (
    <>
      <Card css={{ maxWidth: '350px', h: '400px', margin: '5px' }}>
        <Card.Header
          css={{ backgroundColor: '#8EC5FC', backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)' }}
        >
          <Col>
            <Text size={10}>{props.languages}</Text>
            <Text weight="bold" color="#000">
              {props.name}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image src={props.image} width="100%" height="100%" objectFit="cover" alt="Card example background" />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: 'lightgray',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
            justifyContent: 'space-around',
          }}
        >
          <Button icon={<BsGithub />} size="sm" flat auto rounded color="secondary">
            <Link href={props.sourceUrl} target="_blank">
              <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                Code source
              </Text>
            </Link>
          </Button>
          <Button icon={<BiCameraMovie />} size="sm" flat auto rounded color="secondary">
            <Link href={props.demoUrl} target="_blank">
              <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                DEMO
              </Text>
            </Link>
          </Button>
          <Button icon={<BiLinkExternal />} size="sm" flat auto rounded color="secondary">
            <Link href={props.onlineUrl} target="_blank">
              <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                En ligne
              </Text>
            </Link>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Project;
