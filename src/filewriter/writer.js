const { existsSync, createWriteStream, mkdirSync } = require('fs');

/**
 * @author David Alen <davidalen51@gmail.com>
 * @param {string} user
 */
const save = async (user, { name, data, type }) => {
  if (!user || !data) return;

  let folderPath = `./cache/${user}`;

  let exists = existsSync(folderPath);

  if (exists) {
    let now = Date.now();
    let path = `${folderPath}/video-${now}`;

    mkdirSync(path);

    let stream = createWriteStream(`${path}/video.json`);

    stream.write(
      JSON.stringify(
        {
          filename: name,
          filetype: type,
          resolutions: ['1920x1080', '1280x720', '720x480'],
        },
        null,
        '\t'
      )
    );

    stream.end();

    path += '/default';

    mkdirSync(path);

    stream = createWriteStream(`${path}/${name}`);

    let buffer = Buffer.from(data);

    stream.write(buffer);
    stream.end();
  } else {
    throw new Error('File error');
  }
};

module.exports = {
  save,
};
