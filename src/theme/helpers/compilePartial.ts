import { ThemeService } from '../service';

export function compilePartial(partial: string, context: any) {
    return ThemeService.compilePartial(partial, context);
}
