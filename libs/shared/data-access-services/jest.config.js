module.exports = {
  name: 'shared-data-access-services',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/data-access-services',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
