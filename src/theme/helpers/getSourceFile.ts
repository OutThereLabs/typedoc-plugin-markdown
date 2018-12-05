/**
 * Returns the source file definition
 */
import { ThemeService } from '../service';

export function getSourceFile(fileName: string, line: string, url: string) {
  const options = ThemeService.getOptions();
  let md = 'Defined in ';
  if (options.mdFlavour === 'bitbucket' && options.mdSourceRepo) {
    const bitbucketUrl = `${options.mdSourceRepo}/src/master/src/${fileName}`;
    const bitbucketParams = `fileviewer=file-view-default#${fileName}-${line}`;
    md += `[${fileName}:${line}](${bitbucketUrl}?${bitbucketParams})`;
  } else if (options.mdSourceBranch && options.mdSourceRepo) {
    const githubURL = `${options.mdSourceRepo}/blob/${options.mdSourceBranch}/${options.mdSourceBasePath}/${fileName}#L${line}`;
    md += `[${fileName}:${line}](${githubURL})`;
  } else if (url) {
    md += `[${fileName}:${line}](${url})`;
  } else {
    md += `${fileName}:${line}`;
  }
  return md;
}
