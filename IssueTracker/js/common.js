// array remove
Array.prototype.remove = function (dx) {

    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i]
        }
    }
    this.length -= 1
};

// array contains
Array.prototype.contains = function (item) {
    for (i = 0; i < this.length; i++) {
        if (this[i] == item) {
            return true;
        }
    }
    return false;
};

function initUser(app) {
    app.factory('User', function () {
        return {
            userId: 1,
            token: "xyz-def-abc-hij",
            name: "wkgcass@hotmail.com"
        };
    });
}

function paging($scope, totalPages, currentPage, navMax) {
    var pages = [];
    if (totalPages > navMax) {
        if (currentPage < navMax) {
            for (var i = 1; i <= navMax - 1; ++i) {
                pages.push({
                    index: i,
                    active: i == currentPage
                });
            }
            pages.push({
                index: "...",
                active: false
            });
        } else if (currentPage > (totalPages - navMax + 2)) {
            pages.push({
                index: 1,
                active: false
            });
            pages.push({
                index: "...",
                active: false
            });
            for (var i = totalPages - navMax + 3; i <= totalPages; ++i) {
                pages.push({
                    index: i,
                    active: i == currentPage
                });
            }
        } else {
            pages.push({
                index: 1,
                active: false
            });
            pages.push({
                index: "...",
                active: false
            });
            pages.push({
                index: currentPage - 1,
                active: false
            });
            var i = currentPage;
            for (var j = 0; j < 6; ++j, ++i) {
                pages.push({
                    index: i,
                    active: i == currentPage
                });
            }
            pages.push({
                index: "...",
                active: false
            });
        }
    } else {
        for (var i = 1; i <= totalPages; ++i) {
            pages.push({
                index: i,
                active: i == currentPage
            });
        }
    }
    $scope.pages = pages;
}

function i18n_zh_cn() {
    return {
        /**********
         * global *
         **********/
        APPName: 'Issue Tracker',
        RETURN: '返回',
        DELETE: "移除",
        // navbar
        PROJECT: '工程',
        ISSUES: '事务',
        PROGRESSES: '进度',
        SETTINGS: '设置',
        SEARCHproject: '搜索工程',
        SEARCHissue: '搜索事务',
        SEARCHprogress: '搜索进度',
        CHANGEPASSWORD: '修改密码',
        LOGOUT: '注销',
        // event
        POSTER: '发布者',
        POSTDATE: '发布时间',
        SHOWDETAIL: '显示全部',
        HIDEDETAIL: '隐藏',
        // action
        SUBMIT: '提交',
        RESET: '重置',

        /****************
         * project.html *
         ****************/
        PROJECT_TITLE: '工程',
        VERSION: '版本',
        ReadMe: '工程简介',
        PROJECTINFO: '信息',
        CREATINGTIME: '创建时间',
        MEMBER: '参与者',
        RECENTEVENTS: '最近动态',
        PROGRESSBADGE: '进度',

        /**************************
         * issueView & issue.html *
         **************************/
        ISSUES_TITLE: '事务',
        ISSUEGENERAL: '概况',
        ISSUELIST: '事务列表',
        NEWISSUE: '新建事务',
        PROJECTNAME: '工程名称',
        ISSUECATEGORY: '事务分类',

        PROGRESS_TITLE: '进度',
        PROGRESSLIST: '进度列表',
        POSTPROGRESS: '发布进度',
        PROGRESSTITLEINPUT: '标题',
        PROGRESSCONTENTINPUT: '内容',

        SETTING_TITLE: '设置',
        SETTINGS_BEFORE_PRJ_NAME: '',
        SETTINGS_AFTER_PRJ_NAME: '设置',
        PROJECTSETTING: '工程设置',
        PROJECTINFOSETTING: '工程信息',
        LISTENSETTING: '监听',
        OPERATIONS: '操作',
        COLLABORATION: '成员',
        MEMBERS: '参与者',
        ROLES: '角色',
        ISSUESETTING: '事务设置',
        CATEGORY_STATE: '分类&状态',
        AUTODISPATCH: '自动指派',
        CREATINGPRIVILEGE: '创建权限',
        TRANSPRIVILEGE: '转化权限',

        PROJECTDETAIL: '工程描述',

        REMOVEPROJECT: '移除工程',
        REMOVEPROJECTDESCR: '移除工程时,所有事务,进度,设置均会被删除!',

        USERSELECT: '选择用户',
        ADDUSER: '添加',
        LOADING: '加载中...',

        ADDROLE: '添加角色',
        ADDROLEUSER: '添加用户',
        REMOVEROLE: '移除角色',

        ADDTYPE: "增加分类",
        ADDSTATE: "增加状态",
        DEFAULTSTATE: "默认",

        ISSUEINFO: "事务信息",
        ISSUETYPE: "分类",
        ISSUESTATE: "状态",
        COMMENTS: "评论",
        SENDCOMMENT: "发布评论",
        CHANGETYPE: "变更分类",
        CHANGESTATE: "变更状态",
        NOCHANGE: "无变化",
        TYPE: "分类",
        STATE: "状态"
    };
}