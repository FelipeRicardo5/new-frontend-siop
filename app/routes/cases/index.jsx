import styles from './cases.module.css';
import Sidebar from '../../components/layouts/sidebar';
import Header from '../../components/layouts/header';
import Layout from '../../components/layouts/layout.jsx'


export default function Cases() {
    return (
        <Layout>
            <div className="flex flex-col h-screen">
                <div className="flex flex-1">
                    <h1>Cases</h1>
                    <p>Cases page content goes here.</p>
                </div>
            </div>
        </Layout>

    );
}