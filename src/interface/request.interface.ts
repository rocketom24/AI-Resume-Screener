import { Request } from 'express';

export interface RequestWithUser extends Request {
  user?: { roles?: string[] }; // Define the user interface with roles
}
