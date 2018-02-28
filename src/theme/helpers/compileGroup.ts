import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../service';

/**
 * Sets relevant context for member.groups and compiles partial
 * @param group
 * @param parent
 */
export function compileGroup(group: ReflectionGroup, parent: any) {

  const options = ThemeService.getOptions();

  let md = '';

  if (!options.excludePrivate || !group.allChildrenArePrivate) {
    var displayTitle = false;

    const isMainTitle = options.mode === 0 && parent === undefined;

    switch (group.kind) {
      case ReflectionKind.Property:
      case ReflectionKind.Method:
      case ReflectionKind.Function:
        displayTitle = true;
        break;
      default:
        break;
    }

    md = ThemeService.compilePartial(`members.group.hbs`,
      Object.assign(group, { displayTitle, isMainTitle }));
  }

  return md;
}
