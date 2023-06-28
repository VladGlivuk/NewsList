//constants
import { UNDEFINED } from 'core/constants';

export const isUserSideRendering = (): boolean => typeof window !== UNDEFINED;
