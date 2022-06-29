import "./Header.css"
import {UserOutlined, ShoppingCartOutlined,SearchOutlined} from '@ant-design/icons';
function Header() {
    return (
        <>
            <div className="header">
                <div className="topbar">
                    <p>Freeship TP.Quy Nhơn, Phú Yên, Quảng Ngãi  và một số khu vực tại Miền Trung Nhập mã ưu đãi NQP79 giảm ngay 100K.</p>
                </div>
                <div className="header-middle">
                    <a href="ss">NQP</a>
                    <div className="search">
                        <input className="input-search" type="text" placeholder="Tìm kiếm sản phẩm..."></input>
                        <div className="icon-search">
                            <i><SearchOutlined /></i>
                        </div>
                    </div>
                    <div className="user">
                        <button><UserOutlined />Đăng nhập / Đăng ký</button>
                        <button><ShoppingCartOutlined />Giỏ hàng</button>
                    </div>
                </div>
                <div className="navigation">
                        <ul>
                            <li><a href="ư">Sản phẩm</a></li>
                            <li><a href="2">Liên hệ</a></li>
                            <li><a href="3">Thông tin</a></li>
                        </ul>
                </div>
            </div>

        </>
    );
}

export default Header;