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
  let hasRelationships = (member.implementedTypes || member.implementationOf || member.overwrites || member.extendedTypes);
  if (!(options.excludePrivate && member.flags.isPrivate) && !member.inheritedFrom) {
    switch (member.kind) {
      case ReflectionKind.Constructor:
        md = ThemeService.compilePartial('member.constructor.hbs', Object.assign(member, { hasRelationships }));
        break;
      case ReflectionKind.ObjectLiteral:
        md = ThemeService.compilePartial('member.object.hbs', Object.assign(member, { hasRelationships }));
        break;
      case ReflectionKind.ExternalModule:
        md = ThemeService.compilePartial('member.object.hbs', Object.assign(member, { hasRelationships }));
        break;
      case ReflectionKind.Property:
        md = ThemeService.compilePartial('member.property.hbs', Object.assign(member, { hasRelationships }));
        break;
      case ReflectionKind.Method:
        md = ThemeService.compilePartial('member.method.hbs', Object.assign(member, { hasRelationships }));
        break;
      case ReflectionKind.Class:
        md = ThemeService.compilePartial('member.class.hbs', Object.assign(member, { hasRelationships }));
        break;
      case ReflectionKind.Function:
        md = ThemeService.compilePartial('member.function.hbs', Object.assign(member, { hasRelationships }));
        break;
      default:
        md = ThemeService.compilePartial('member.hbs', Object.assign(member, { hasRelationships }));
    }
  }

  return md;
}
