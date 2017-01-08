'use strict';

import gulp     from 'gulp';
// import webpack  from 'webpack';
import path     from 'path';
// import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import yargs    from 'yargs';

let root = 'src';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
  return path.join(root, 'app/', glob); // app/components/{glob}
};

let resolveToLazy = (glob = '') => {
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'components/**/*.**'),
  blankLazyTemplates: path.join(__dirname, 'generator', 'lazy/**/*.**'),
  dest: path.join(__dirname, 'dist')
};

// generate eager loaded component
gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

// generate lazy loaded component
gulp.task('lazy', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToLazy(), parentPath, name);

  return gulp.src(paths.blankLazyTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

// gulp.task('clean', (cb) => {
//   del([paths.dest]).then(function (paths) {
//     gutil.log("[clean]", paths);
//     cb();
//   })
// });

gulp.task('default', ['lazy']);
