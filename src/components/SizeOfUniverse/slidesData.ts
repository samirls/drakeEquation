const slidesData = [
  {
    title: "The Universe within 12.5 Light Years",
    subTitle: "The Nearest Stars",
    src: "/img/carousel/1.gif",
    about: "This map shows all the star systems that lie within 12.5 light years of our Sun. Most of the stars are red dwarfs - stars with a tenth of the Sun's mass and less than one hundredth the luminosity. Roughly eighty percent of all the stars in the universe are red dwarfs, and the nearest star - Proxima - is a typical example."
  },
  {
    title: "The Universe within 250 Light Years",
    subTitle: "The Solar Neighbourhood",
    src: "/img/carousel/2.gif",
    about: "This map is a plot of the 1500 most luminous stars within 250 light years. All of these stars are much more luminous than the Sun and most of them can be seen with the naked eye. About one third of the stars visible with the naked eye lie within 250 light years, even though this is only a tiny part of our galaxy."
  },
  {
    title: "The Universe within 5.000 Light Years",
    subTitle: "The Orion Arm",
    src: "/img/carousel/3.gif",
    about: "This is a map of our corner of the Milky Way galaxy. The Sun is located in the Orion Arm - a fairly minor arm compared with the Sagittarius Arm, which is located closer to the galactic centre. The map shows several stars visible with the naked eye which are located deep within the Orion arm. The most notable group of stars here are main stars in the constellation of Orion - from which the spiral arm gets its name. All of these stars are bright giant and supergiant stars, thousands of times more luminous than the Sun. The most luminous star on the map is Rho Cassiopeia (ρ Cas) - to us 4000 light years away, it is a dim naked eye star, but in reality it is a huge supergiant star 100 000 times more luminous than our Sun."
  },
  {
    title: "The Universe within 50.000 Light Years",
    subTitle: "The Milky Way Galaxy",
    src: "/img/carousel/4.gif",
    about: "This map shows the full extent of the Milky Way galaxy - a spiral galaxy of at least two hundred billion stars. Our Sun is buried deep within the Orion Arm about 26 000 light years from the centre. Towards the centre of the Galaxy the stars are packed together much closer than they are where we live. Notice also the presence of small globular clusters of stars which lie well outside the plane of the Galaxy, and notice too the presence of a nearby dwarf galaxy - the Sagittarius dwarf - which is slowly being swallowed up by our own galaxy."
  },
  {
    title: "The Universe within 500.000 Light Years",
    subTitle: "The Satellite Galaxies",
    src: "/img/carousel/5.gif",
    about: "The Milky Way is surrounded by several dwarf galaxies, typically containing a few tens of millions of stars, which is insignificant compared with the number of stars in the Milky Way itself. This map shows the closest dwarf galaxies, they are all gravitationally bound to the Milky Way requiring billions of years to orbit it."
  },
  {
    title: "The Universe within 5.000.000 Light Years",
    subTitle: "The Local Group of Galaxies",
    src: "/img/carousel/6.gif",
    about: "The Milky Way is one of three large galaxies belonging to the group of galaxies called the Local Group which also contains several dozen dwarf galaxies. Most of these galaxies are depicted on the map, although most dwarf galaxies are so faint, that there are probably several more waiting to be discovered."
  },
  {
    title: "The Universe within 100.000.000 Light Years",
    subTitle: "The Virgo Supercluster",
    src: "/img/carousel/7.gif",
    about: "Our galaxy is just one of thousands that lie within 100 million light years. The above map shows how galaxies tend to cluster into groups, the largest nearby cluster is the Virgo cluster a concentration of several hundred galaxies which dominates the galaxy groups around it. Collectively, all of these groups of galaxies are known as the Virgo Supercluster. The second richest cluster in this volume of space is the Fornax Cluster, but it is not nearly as rich as the Virgo cluster. Only bright galaxies are depicted on the map, our galaxy is the dot in the very centre."
  },
  {
    title: "The Universe within 1.000.000.000 Light Years",
    subTitle: "The Neighbouring Superclusters",
    src: "/img/carousel/8.gif",
    about: "Galaxies and clusters of galaxies are not uniformly distributed in the Universe, instead they collect into vast clusters and sheets and walls of galaxies interspersed with large voids in which very few galaxies seem to exist. The map above shows many of these superclusters including the Virgo supercluster - the minor supercluster of which our galaxy is just a minor member. The entire map is approximately 7 percent of the diameter of the entire visible Universe."
  },
  {
    title: "The Universe within 14 billion Light Years",
    subTitle: "The Visible Universe",
    src: "/img/carousel/9.gif",
    about: "This map attempts to show the entire visible Universe. The galaxies in the universe tend to collect into vast sheets and superclusters of galaxies surrounding large voids giving the universe a cellular appearance. Because light in the universe only travels at a fixed speed, we see objects at the edge of the universe when it was very young up to 14 billion years ago."
  },
];

export default slidesData






/* 

<SwiperSlide className={styles.swiper_slide}>
<img
  src="http://www.atlasoftheuniverse.com/5000lys.gif"
  onClick={() => {
    onOpen();
    setModalTitle("The Universe within 5.000 Light Years");
    setModalSubTitle("The Orion Arm");
    setSrc("http://www.atlasoftheuniverse.com/5000lys.gif");
    setAbout(
      "This is a map of our corner of the Milky Way galaxy. The Sun is located in the Orion Arm - a fairly minor arm compared with the Sagittarius Arm, which is located closer to the galactic centre. The map shows several stars visible with the naked eye which are located deep within the Orion arm. The most notable group of stars here are main stars in the constellation of Orion - from which the spiral arm gets its name. All of these stars are bright giant and supergiant stars, thousands of times more luminous than the Sun. The most luminous star on the map is Rho Cassiopeia (ρ Cas) - to us 4000 light years away, it is a dim naked eye star, but in reality it is a huge supergiant star 100 000 times more luminous than our Sun."
    );
  }}
/>
</SwiperSlide>
<SwiperSlide className={styles.swiper_slide}>
<img 
  src="http://www.atlasoftheuniverse.com/galaxy.gif" 
  onClick={() => {
    onOpen();
    setModalTitle("The Universe within 50.000 Light Years");
    setModalSubTitle("The Milky Way Galaxy");
    setSrc("http://www.atlasoftheuniverse.com/galaxy.gif");
    setAbout(
      "This map shows the full extent of the Milky Way galaxy - a spiral galaxy of at least two hundred billion stars. Our Sun is buried deep within the Orion Arm about 26 000 light years from the centre. Towards the centre of the Galaxy the stars are packed together much closer than they are where we live. Notice also the presence of small globular clusters of stars which lie well outside the plane of the Galaxy, and notice too the presence of a nearby dwarf galaxy - the Sagittarius dwarf - which is slowly being swallowed up by our own galaxy."
    );
  }}
/>
</SwiperSlide>
<SwiperSlide className={styles.swiper_slide}>
<img 
  src="http://www.atlasoftheuniverse.com/satell.gif"
  onClick={() => {
    onOpen();
    setModalTitle("The Universe within 500.000 Light Years");
    setModalSubTitle("The Satellite Galaxies");
    setSrc("http://www.atlasoftheuniverse.com/satell.gif");
    setAbout(
      "The Milky Way is surrounded by several dwarf galaxies, typically containing a few tens of millions of stars, which is insignificant compared with the number of stars in the Milky Way itself. This map shows the closest dwarf galaxies, they are all gravitationally bound to the Milky Way requiring billions of years to orbit it."
    );
  }}
/>
</SwiperSlide>
<SwiperSlide className={styles.swiper_slide}>
<img 
  src="http://www.atlasoftheuniverse.com/localgrp.gif"
  onClick={() => {
    onOpen();
    setModalTitle("The Universe within 5.000.000 Light Years");
    setModalSubTitle("The Local Group of Galaxies");
    setSrc("http://www.atlasoftheuniverse.com/localgrp.gif");
    setAbout(
      "The Milky Way is one of three large galaxies belonging to the group of galaxies called the Local Group which also contains several dozen dwarf galaxies. Most of these galaxies are depicted on the map, although most dwarf galaxies are so faint, that there are probably several more waiting to be discovered."
    );
  }}
/>
</SwiperSlide>
<SwiperSlide className={styles.swiper_slide}>
<img 
  src="http://www.atlasoftheuniverse.com/virgocls.gif"
  onClick={() => {
    onOpen();
    setModalTitle("The Universe within 100.000.000 Light Years");
    setModalSubTitle("The Virgo Supercluster");
    setSrc("http://www.atlasoftheuniverse.com/virgocls.gif");
    setAbout(
      "Our galaxy is just one of thousands that lie within 100 million light years. The above map shows how galaxies tend to cluster into groups, the largest nearby cluster is the Virgo cluster a concentration of several hundred galaxies which dominates the galaxy groups around it. Collectively, all of these groups of galaxies are known as the Virgo Supercluster. The second richest cluster in this volume of space is the Fornax Cluster, but it is not nearly as rich as the Virgo cluster. Only bright galaxies are depicted on the map, our galaxy is the dot in the very centre."
    );
  }}
/>
</SwiperSlide>
<SwiperSlide className={styles.swiper_slide}>
<img 
  src="http://www.atlasoftheuniverse.com/supercls.gif"
  onClick={() => {
    onOpen();
    setModalTitle("The Universe within 1.000.000.000 Light Years");
    setModalSubTitle("The Neighbouring Superclusters");
    setSrc("http://www.atlasoftheuniverse.com/supercls.gif");
    setAbout(
      "Galaxies and clusters of galaxies are not uniformly distributed in the Universe, instead they collect into vast clusters and sheets and walls of galaxies interspersed with large voids in which very few galaxies seem to exist. The map above shows many of these superclusters including the Virgo supercluster - the minor supercluster of which our galaxy is just a minor member. The entire map is approximately 7 percent of the diameter of the entire visible Universe."
    );
  }}            
/>
</SwiperSlide>
<SwiperSlide className={styles.swiper_slide}>
<img 
  src="http://www.atlasoftheuniverse.com/universe.gif"
  onClick={() => {
    onOpen();
    setModalTitle("The Universe within 14 billion Light Years");
    setModalSubTitle("The Visible Universe");
    setSrc("http://www.atlasoftheuniverse.com/universe.gif");
    setAbout(
      "This map attempts to show the entire visible Universe. The galaxies in the universe tend to collect into vast sheets and superclusters of galaxies surrounding large voids giving the universe a cellular appearance. Because light in the universe only travels at a fixed speed, we see objects at the edge of the universe when it was very young up to 14 billion years ago."
    );
  }}                  
/>
</SwiperSlide> */