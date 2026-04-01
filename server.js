const http = require("http");
const { BlobServiceClient } = require('@azure/storage-blob');

const port = process.env.PORT || 3000;
const connStr = process.env.AZURE_STORAGE_CONNECTION_STRING;

http.createServer(async (req, res) => {
  if (req.url === '/upload') {
    try {
      const client = BlobServiceClient.fromConnectionString(connStr);
      const container = client.getContainerClient('uploads');
      const blockBlob = container.getBlockBlobClient('test.txt');
      await blockBlob.upload('Hello from App Service!', 23);
      res.end('Fichier uploadé ! URL: ' + blockBlob.url);
    } catch (err) {
      res.end('Erreur: ' + err.message);
    }
  } else {
    res.end('Hello from App Service!');
  }
}).listen(port);
