// import React, { useState, useCallback } from "react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";

// // export const photos = [
// //   {
// //     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
// //     width: 4,
// //     height: 3
// //   },
// //   {
// //     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
// //     width: 1,
// //     height: 1
// //   },
// //   {
// //     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
// //     width: 3,
// //     height: 4
// //   },
// //   {
// //     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
// //     width: 3,
// //     height: 4
// //   },
// //   {
// //     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
// //     width: 3,
// //     height: 4
// //   },
// //   {
// //     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
// //     width: 4,
// //     height: 3
// //   },
// //   {
// //     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
// //     width: 3,
// //     height: 4
// //   },
// //   {
// //     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
// //     width: 4,
// //     height: 3
// //   },
// //   {
// //     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
// //     width: 4,
// //     height: 3
// //   }
// // ];


// export default function CustomGallery({photos}: any) {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   // async function getImgBlob(photo: string) {
//   //   const resp = await fetch(`/images/gallery/${photo}`);
//   //   return resp.ok ? resp.blob() : Promise.reject(resp.status);
//   // }

//   const _photos = photos.map((photo: string) => {
//     // const imgBlob = await getImgBlob(photo);
//     // const imageBitmap: ImageBitmap = await createImageBitmap(imgBlob); // Blob file
//     // const { width, height } = imageBitmap;
//     // const _width = !isNaN(width) ? Math.round(width*0.002) : 3
//     // const _height = !isNaN(height) ? Math.round(height*0.01) : 1
//     // console.log('dim==', width, height)
//     // console.log('After dim==', _width, _height)
//     return {src: `/images/gallery/${photo}`, width: Math.random(), height: Math.random()}
//   })

//   const openLightbox = useCallback((_event:any, { index }: {index: number}) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <section className="ftco-section bg-light">
//       <div className="container">
//         <Gallery photos={_photos} onClick={openLightbox} />
//         <ModalGateway>
//           {viewerIsOpen ? (
//             <Modal onClose={closeLightbox}>
//               <Carousel
//                 currentIndex={currentImage}
//                 views={_photos.map((x:any) => ({
//                   ...x,
//                   srcset: x.srcSet,
//                   caption: x.title
//                 }))}
//               />
//             </Modal>
//           ) : null}
//         </ModalGateway>
//       </div>
//     </section>
//   );
// }

import { Key, useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function CustomGallery(props: any) {
  const [index, setIndex] = useState(-1);

  const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

  // const unsplashLink = (id: string, width: number, height: number) =>
  //   `https://source.unsplash.com/${id}/${width}x${height}`;
  // const unsplashPhotos = [
  //   { id: "8gVv6nxq6gY", width: 10, height: 10 },
  //   { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  //   { id: "RkBTPqPEGDo", width: 1080, height: 720 },
  //   { id: "Yizrl9N_eDA", width: 1080, height: 721 },
  //   { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
  //   { id: "Jztmx9yqjBw", width: 1080, height: 607 },
  //   { id: "-heLWtuAN3c", width: 1080, height: 608 },
  //   { id: "xOigCUcFdA8", width: 1080, height: 720 },
  //   { id: "1azAjl8FTnU", width: 1080, height: 1549 },
  //   { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
  //   { id: "twukN12EN7c", width: 1080, height: 694 },
  //   { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
  //   { id: "sEXGgun3ZiE", width: 1080, height: 720 },
  //   { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
  //   { id: "q-motCAvPBM", width: 1080, height: 1620 },
  //   { id: "Xn4L310ztMU", width: 1080, height: 810 },
  //   { id: "iMchCC-3_fE", width: 1080, height: 610 },
  //   { id: "X48pUOPKf7A", width: 1080, height: 160 },
  //   { id: "GbLS6YVXj0U", width: 1080, height: 810 },
  //   { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  //   { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
  // ];

  async function getImgBlob(photo: string) {
    const resp = await fetch(`/images/gallery/${photo}`);
    return resp.ok ? resp.blob() : Promise.reject(resp.status);
  }

  // const photos = props.photos.map(async (photo: string) => {
  //   const imgBlob = await getImgBlob(photo);
  //   const width = breakpoints[0];
  //   const height = (photo.height / photo.width) * width;

  //   return {
  //     src: unsplashLink(photo.id, width, height),
  //     width,
  //     height,
  //     srcSet: breakpoints.map((breakpoint) => {
  //       const height = Math.round((photo.height / photo.width) * breakpoint);
  //       return {
  //         src: unsplashLink(photo.id, breakpoint, height),
  //         width: breakpoint,
  //         height,
  //       };
  //     }),
  //   };
  // });

  const [photos, setPhotos] = useState([])

  const photosMapped = props.photos && props.photos.map((photo: string, i: Key) => {
    // const imgBlob = await getImgBlob(photo);
    // const imageBitmap: ImageBitmap = await createImageBitmap(imgBlob); // Blob file
    // const { width, height } = imageBitmap;
    const width = 500
    const height = 350

    const _width = breakpoints[0];
    const _height = (height / width) * width;

    return {
      key: i,
      src: `/images/gallery/${photo}`,
      _width,
      _height,
      srcSet: breakpoints.map((breakpoint) => {
        const __height = Math.round((height / width) * breakpoint);
        return {
          src: `/images/gallery/${photo}`,
          width: breakpoint,
          __height,
        };
      }),
    };
  })

  useEffect(() => {
    // async function getPhotos () {
    //   const _photos = Promise.all(photosPromise)
    //   setPhotos(_photos)
    // }

    // getPhotos()
    // console.log('Photos', photos)
    setPhotos(photosMapped)
  }, [props.photos])

  return (
    <>
      <PhotoAlbum photos={photos} layout="masonry" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
