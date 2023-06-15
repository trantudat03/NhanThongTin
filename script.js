// Lấy dữ liệu từ URL query string
function getQueryParams() {
    const queryParams = {};
    const urlParams = new URLSearchParams(window.location.search);
    for (let pair of urlParams.entries()) {
      queryParams[pair[0]] = pair[1];
    }
    return queryParams;
  }
  
  // Xử lý khi trang được tải
  window.onload = function() {
    const queryParams = getQueryParams();
    const data = queryParams.data;
  
    // Giải mã và hiển thị thông tin từ VNPAY
    const paymentInfoContainer = document.getElementById('payment-info');
    const decodedData = decodeURIComponent(data);
    const paymentInfo = JSON.parse(decodedData);
    const infoHTML = `
      <p>Mã đơn hàng: ${paymentInfo.orderId}</p>
      <p>Tổng tiền: ${paymentInfo.amount}</p>
      <p>Ngày thanh toán: ${paymentInfo.paymentDate}</p>
      <p>Trạng thái: ${paymentInfo.status}</p>
      <!-- Thêm thông tin khác từ VNPAY tùy theo yêu cầu -->
    `;
    paymentInfoContainer.innerHTML = infoHTML;
  };
  