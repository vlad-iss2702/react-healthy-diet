import AppBlogList from './appBlogList/AppBlogList';
import AppBlogSidebar from './appBlogSidebar/AppBlogSidebar';

import './appBlog.scss';

const AppBlog = () => {
    return (
        <div className="container">
            <div className="blog-structure">
                <AppBlogList />
                <AppBlogSidebar />
            </div>
        </div>
    )
}

export default AppBlog;