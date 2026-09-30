import { Request, Response, NextFunction } from 'express';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // TODO: Student implementation - Part 1: Authentication Middleware
  // Store the authenticated userId on res.locals.userId
  if (req.method === 'POST' || req.method === 'PATCH'){
    let rawUserId = null;

    for (let i = 0; i < req.rawHeaders.length; i+= 2){
      if (req.rawHeaders[i] === 'X-User-ID'){
        rawUserId = req.rawHeaders[i + 1];
        break;
      }
    }

    const isValidNum = rawUserId !== null && !isNaN(Number(rawUserId)) && Number(rawUserId) > 0;
    if (!isValidNum){
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    res.locals.userId = Number(rawUserId);

  }
  next();
}

export default authMiddleware;
