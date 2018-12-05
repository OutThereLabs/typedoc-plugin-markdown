import { Application } from 'typedoc/dist/lib/application';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';
import { MarkdownPlugin } from './plugin';

module.exports = (PluginHost: Application) => {

  const app = PluginHost.owner;

  /**
   * Expose additional options for consumption.
   */
  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Suppress file sources from output.',
    name: 'mdHideSources',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Markdown parser ie: "bitbucket"',
    name: 'mdFlavour',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Git branch to point source links at',
    name: 'mdSourceBranch',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    defaultValue: '',
    help: 'The path to your files',
    name: 'mdSourceBasePath',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    defaultValue: '',
    help: 'The repository to use for source files (ignored unless markdownFlavour is set)',
    name: 'mdSourceRepo',
    type: ParameterType.String,
  });

  /**
   * Add the plugin to the converter instance
   */
  app.converter.addComponent('markdown', MarkdownPlugin);

};
