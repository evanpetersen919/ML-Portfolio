# Video Optimization Instructions

After restarting PowerShell, run this command to compress the TripSaver video:

```powershell
ffmpeg -i "public\projects\tripsaver\demo.mp4" -vcodec libx264 -crf 28 -preset medium -vf "scale=1280:-2" -movflags +faststart -y "public\projects\tripsaver\demo-compressed.mp4"
```

This will:
- Reduce resolution to 1280px width (maintains aspect ratio)
- Use CRF 28 (good quality/size balance)
- Add fast start flag for web streaming
- Output to demo-compressed.mp4

Then update Projects.jsx to use the compressed version:
- Change `/projects/tripsaver/demo.mp4` to `/projects/tripsaver/demo-compressed.mp4`

Expected result: ~44MB reduced to ~5-8MB without noticeable quality loss
