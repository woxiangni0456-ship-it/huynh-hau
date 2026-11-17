# Vũ Huỳnh & Thanh Hậu – Wedding Invitation

## Chạy trên Windows
1. Cài Node.js 20 LTS.
2. Giải nén ZIP và mở thư mục bằng VS Code.
3. Mở Terminal, chạy `npm install` rồi `npm run dev`.
4. Truy cập http://localhost:3000.

## Cấu hình
- Next.js + TypeScript + Tailwind CSS.
- Không có Admin, không RSVP, không cần Supabase hoặc database.
- Đã thêm 8 ảnh Google Photos và nhạc MP3 do bạn cung cấp.
- Ngày cưới 29/11/2026; đón khách 28/11 từ 13:00; tiệc 29/11 lúc 07:30.
- Địa chỉ hiện có: TDP Chi Ngãi 1, phường Trần Hưng Đạo, TP Hải Phòng.

## Cần bổ sung trước khi phát hành
- Link Maps chính xác nhà trai, nhà gái và nơi tổ chức nếu khác.
- Tên ngân hàng, chủ tài khoản, số tài khoản và ảnh QR của cô dâu/chú rể. QR đang là chỗ giữ chỗ, chưa phải QR chuyển khoản thật.
- Kiểm tra quyền xem công khai của 8 ảnh và link MP3.

## Deploy
Đưa dự án lên GitHub, sau đó Import repository trên Vercel. Build command `npm run build`. Không cần biến môi trường.
