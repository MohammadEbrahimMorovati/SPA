export default () => {
  return `
    <div class="dashboard-container">
      <h1 class="dashboard-title">📊 داشبورد</h1>

      <div class="card-grid">
        <div class="dashboard-card card-users">
          <h2>کاربران</h2>
          <p>120</p>
        </div>
        <div class="dashboard-card card-posts">
          <h2>پست ها</h2>
          <p>89</p>
        </div>
        <div class="dashboard-card card-revenue">
          <h2>درآمد</h2>
          <p>$9,300</p>
        </div>
      </div>

      <div class="dashboard-box">
        <h2>🔔 اعلان ها</h2>
        <ul>
          <li>✅ کاربر وارد شد</li>
          <li>📝 پست جدید توسط مورو گذاشته شد</li>
          <li>💰 پرداخت</li>
        </ul>
      </div>
    </div>
  `;
};
