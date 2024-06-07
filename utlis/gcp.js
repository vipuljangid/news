import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: 'YOUR_PROJECT_ID',
  keyFilename: 'path/to/your/service-account-key.json',
});

const bucket = storage.bucket('YOUR_BUCKET_NAME');

export const uploadFile = async (file) => {
  const blob = bucket.file(file.name);
  const blobStream = blob.createWriteStream({
    resumable: false,
  });

  return new Promise((resolve, reject) => {
    blobStream
      .on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl);
      })
      .on('error', (err) => {
        reject(err);
      })
      .end(file.buffer);
  });
};
