module.exports = {
  name: 'client-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/client-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
