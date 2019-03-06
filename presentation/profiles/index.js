import React from "react";
import { Heading, ListItem, List, Slide, Image, Link } from "spectacle";

const images = {
  github: require("../../assets/img/github.svg"),
  web: require("../../assets/img/web.svg"),
  twitter: require("../../assets/img/twitter.svg"),
  space: require("../../assets/img/space.jpg")
};

const Profile = ({ name, job, website, github, twitter, pic }) => (
  <Slide bgColor="tertiary" bgImage={images.space} bgDarken={0.2} className="bgDotted">
    <Heading textColor="#fff" size={3}>
      {name}
    </Heading>
    <Heading textColor="primary" size={5}>
      {job}
    </Heading>
    <Image src={pic} className="avatar" />
    <List textAlign="left" className="presentation__list">
      <ListItem>
        <Link href={`http://${website}`}>
          <Image src={images.web} />
          {website}
        </Link>
      </ListItem>
      <ListItem>
        <Link href={`http://twitter.com/${twitter.replace(" ", "")}`}>
          <Image src={images.twitter} />@{twitter}
        </Link>
      </ListItem>
      <ListItem>
        <Link href={`http://github.com/${github}`}>
          <Image src={images.github} />
          {github}
        </Link>
      </ListItem>
    </List>
  </Slide>
);

export default Profile;
