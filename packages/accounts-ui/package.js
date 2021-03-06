Package.describe({
  summary: "Simple templates to add login widgets to an app."
});

Package.on_use(function (api) {
  api.use(['accounts-urls', 'accounts-base', 'underscore', 'spark', 'templating'], 'client');
  api.use('less', 'server');

  api.add_files([
    'login_buttons.less',
    'login_buttons.html',
    'login_buttons.js'], 'client');
});
