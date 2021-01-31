import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { Card, CardBody, Spinner, Row, Col, Alert } from 'reactstrap';
import { getAPIBaseURL } from '../utills/common';
import { Link } from 'react-router-dom';

const Download = (params) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const urlParams = new URLSearchParams(params.location.search);
  const url = urlParams.get('url');

  useEffect(() => {
    const getVideoInfo = async () => {
      try {
        const result = await axios.post(getAPIBaseURL() + 'facebook/download', { url });
        setVideoInfo(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    url && getVideoInfo();
  }, [url, setVideoInfo]);

  const videoURL = videoInfo ? (videoInfo.links.hd ? videoInfo.links.hd : videoInfo.links.sd) : '';

  return (
    <div className="container-fluid p-0">
      <div className="container pt-4 pb-4">
        <Card className={'mb-3 ' + (videoInfo ? '' : 'text-center')}>
          {!videoInfo && (
            <div className="p-4">
              <Spinner color="primary" style={{ height: '3rem', width: '3rem' }} children={null} />
              <p className="m-0 mt-2">Please wait...</p>
            </div>
          )}
          {videoInfo && (
            <CardBody>
              <Row>
                <Col sm={12} md={4}>
                  <video controls className="max-width-100" src={videoURL} />
                </Col>
                <Col sm={12} md={4}>
                  <a href={url} target="_blank" rel="noreferrer" className="font-1rem font-bold">
                    {videoInfo.title}
                  </a>
                  {videoInfo.description && <p>{videoInfo.description}</p>}
                </Col>
                <Col sm={12} md={4}>
                  <a href={videoInfo.links.hd} className="w-100 btn btn-green text-white mb-2">
                    Download in HD Quality
                  </a>
                  <a href={videoInfo.links.sd} className="w-100 btn btn-green text-white mb-2">
                    Download in SD Quality
                  </a>
                </Col>
              </Row>
            </CardBody>
          )}
        </Card>

        {videoInfo && (
          <Card>
            <CardBody className="text-center">
              <p>Scan the QR code below to download directly to your smartphone or tablet!</p>
              <Card title={videoURL} className="d-inline-block p-1">
                <QRCode value={videoURL} size={160} />
              </Card>

              <Alert color="info" className="mt-2 mb-0">
                Want to download another video? <Link to="/">Click here</Link>
              </Alert>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Download;
