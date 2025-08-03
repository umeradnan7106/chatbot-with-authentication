// src/app/embed/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const botId = url.searchParams.get('botId') || 'default-bot';

  const scriptPath = path.join(process.cwd(), 'public', 'embed-script', 'script.js');
  const script = fs.readFileSync(scriptPath, 'utf-8');
  const modifiedScript = script.replace('__BOT_ID__', botId);

  return new NextResponse(modifiedScript, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript',
    },
  });
}
