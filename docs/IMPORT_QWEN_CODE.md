# คู่มือการนำเข้าโค้ดจาก Qwen (Importing Qwen Code)

เอกสารนี้เขียนขึ้นเพื่อแก้ปัญหาโดยเฉพาะ:
> **ปัญหาที่พบบ่อย:** *"เวลาสั่งให้ Qwen ทำเว็บไฟล์เดียว มันทำออกมาสวยงามมาก แบบจำลองเล่นได้ดีเยี่ยม ไม่มีบั๊กเลย แต่พอสั่งให้มันเพิ่มหลายไฟล์ หรือเขียนระบบเพิ่ม Qwen มักจะทำโค้ดเดิมพัง บั๊กกระจาย หรือโค้ดเดิมหายหมด"*

ด้วยสถาปัตยกรรมของโปรเจกต์นี้ คุณสามารถปล่อยให้ **Qwen สร้างงานที่มันถนัดที่สุด (ไฟล์เดี่ยว)** แล้วนำมาเชื่อมเข้ากับแพลตฟอร์มนี้ได้อย่างปลอดภัย 100% โดยเลือกระหว่าง 2 วิธีต่อไปนี้:

---

## รูปแบบที่ 1: นำเข้าเป็น Single-File HTML (วิธีที่ง่ายที่สุด & ไม่บั๊กแน่นอน ⭐⭐⭐)

เหมาะมากหาก Qwen สร้างแบบจำลองหรือสรุปบทเรียนมาเป็น **ไฟล์ HTML เดี่ยวที่มี CSS และ JavaScript อยู่ในตัว**

### ขั้นตอน:
1. นำโค้ด HTML ที่ Qwen สร้างไปบันทึกไว้ที่:
   ```text
   public/qwen-modules/<subjectId>/<chapterId>/index.html
   ```
   *ตัวอย่าง:* `public/qwen-modules/biology/cell-structure/index.html`

2. ในไฟล์ HTML ของ Qwen ให้เพิ่มสคริปต์ส่งความสูงอัตโนมัติ (Auto-resize) ที่ด้านล่างสุดของ `<script>`:
   ```javascript
   function sendHeightToParent() {
     const height = document.body.scrollHeight + 40;
     window.parent.postMessage({
       type: 'QWEN_MODULE_RESIZE',
       height: height
     }, '*');
   }
   window.addEventListener('load', sendHeightToParent);
   window.addEventListener('resize', sendHeightToParent);
   ```

3. ในไฟล์บทเรียน `src/content/subjects/<subjectId>/chapters/<chapterId>.ts` ให้เพิ่ม Section:
   ```typescript
   {
     id: 'sec-qwen-sim',
     heading: 'แบบจำลอง Interactive จาก Qwen',
     type: 'legacy-html',
     content: {
       modulePath: '/qwen-modules/biology/cell-structure/index.html',
       title: 'สำรวจออร์แกเนลล์ของเซลล์',
       description: 'โมดูลแบบจำลอง HTML สร้างโดย Qwen เรนเดอร์ใน Sandboxed iframe',
       initialHeight: 480,
     },
   }
   ```

### ทำไมวิธีนี้ถึงไม่มีวันพัง?
* โค้ดของ Qwen จะถูกกักบริเวณอยู่ใน `<iframe>` แบบ `sandbox="allow-scripts allow-same-origin"`
* CSS และ Javascript ของ Qwen **ไม่สามารถรั่วไหลออกมารบกวนหน้าเว็บหลักได้เลย**
* รีเฟรชได้ และมีปุ่มเปิดเต็มจอ

---

## รูปแบบที่ 2: นำเข้าเป็น React Component (สำหรับโมดูล React จาก Qwen)

หากสั่ง Qwen ให้สร้างเป็น React Component:

### ขั้นตอน:
1. นำไฟล์ Component ของ Qwen ไปวางในโฟลเดอร์:
   ```text
   src/simulations/demos/<SimulationName>/<SimulationName>.tsx
   src/simulations/demos/<SimulationName>/<SimulationName>.module.css
   ```

2. ตรวจสอบว่าในไฟล์ Component:
   * ใช้ `export default <SimulationName>`
   * ใช้ CSS Module (เช่น `import styles from './<SimulationName>.module.css'`)
   * มี Cleanup function ใน `useEffect` สำหรับ Timer และ `requestAnimationFrame`

3. เปิด `src/simulations/registry.ts` เพื่อลงทะเบียน:
   ```typescript
   const registry: Record<string, ComponentType<any>> = {
     ...
     'my-new-sim': lazy(() => import('./demos/<SimulationName>/<SimulationName>')),
   };
   ```

4. อ้างอิงรหัส `'my-new-sim'` ใน Section `simulation` ของบทเรียนที่ต้องการ

---

## ข้อควรจำ
* **ห้าม** นำโค้ดของ Qwen ไปแปะทับ `App.tsx`, `router.tsx` หรือ `global.css` เด็ดขาด
* ทุกครั้งที่เพิ่มเนื้อหาใหม่ ให้เพิ่มเป็นไฟล์เดี่ยวแล้วลงทะเบียนผ่าน Registry เท่านั้น
