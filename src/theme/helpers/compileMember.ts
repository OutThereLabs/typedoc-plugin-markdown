import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../service';

/**
 * Compiles relevant member partial
 * @param member
 */
export function compileMember(member: DeclarationReflection) {

  const options = ThemeService.getOptions();

  let md = '';

  if (!(options.excludePrivate && member.flags.isPrivate)) {
    switch (member.kind) {
      case ReflectionKind.Constructor:
        md = ThemeService.compilePartial('member.constructor.hbs', member);
        break;
      case ReflectionKind.ObjectLiteral:
        md = ThemeService.compilePartial('member.object.hbs', member);
        break;
      case ReflectionKind.ExternalModule:
        md = ThemeService.compilePartial('member.object.hbs', member);
        break;
      default:
        md = ThemeService.compilePartial('member.hbs', member);
    }
  }

  return md;
}
