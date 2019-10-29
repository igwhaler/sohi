<template>
    <el-container>
        <el-header>
            <div class="operation-title">夺宝电商后台</div>

            <div class="operation-user">
                <div class="user-info">
                    <div class="avatar">
                        <img src="https://pic.rmb.bdstatic.com/bb52e4902de1f7bdfaea7f1b2eae2a25.jpeg" alt="头像">
                    </div>
                    <div class="name">漩涡鸣人</div>
                </div>

                <div class="login-out">
                    <el-button size="small" type="info">退出登录</el-button>
                </div>
            </div>

        </el-header>

        <el-container>
            <el-aside width="200px">
                <div class="wrap-el-menu">
                    <el-menu :default-active="defaultActive">
                        <template v-for="(firstItem, firstIndex) in AsideConfig">
                            <el-menu-item
                                v-if="!firstItem.children"
                                :index="`${firstIndex}`"
                                :key="firstIndex"
                            >
                                <router-link slot="title" :to="firstItem.path">
                                    <i :class="firstItem.icon"></i>
                                    <span>{{firstItem.title}}</span>
                                </router-link>
                            </el-menu-item>

                            <el-submenu
                                v-else
                                :index="`${firstIndex}`"
                                :key="firstIndex"
                            >
                                <template slot="title">
                                    <i :class="firstItem.icon"></i>
                                    <span>{{firstItem.title}}</span>
                                </template>

                                <el-menu-item-group>
                                    <el-menu-item
                                        v-for="(secondItem, secondIndex) in firstItem.children"
                                        :index="`${firstIndex}-${secondIndex}`"
                                        :key="`${firstIndex}-${secondIndex}`"
                                    >
                                        <router-link :to="secondItem.path">{{secondItem.title}}</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </template>
                    </el-menu>
                </div>
            </el-aside>

            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import { AsideConfig } from './config.js';

export default {
    name: 'layout',
    data() {
        return {
            AsideConfig: AsideConfig,
            defaultActive: '0'
        };
    },

    created() {
        this.getDefaultActive();
    },

    methods: {
        getDefaultActive() {
            let { name } = this.$route;

            this.AsideConfig.some((firstItem, firstIndex) => {
                if (firstItem.name === name && !firstItem.children) {
                    this.defaultActive = `${firstIndex}`;
                    return true;
                }

                if (firstItem.children) {
                    return firstItem.children.some((secondItem, secondIndex) => {
                        if (secondItem.name === name) {
                            this.defaultActive = `${firstIndex}-${secondIndex}`;
                            return true;
                        }

                        return false;
                    });
                }

                return false;
            });
        }
    }
};
</script>

<style lang="less" scoped>
.el-container {
    height: 100%;
}

.el-header {
    border-bottom: solid 1px #e6e6e6;
    .operation-title {
        float: left;
        line-height: 60px;
        font-size: 24px;
        font-weight: bold;
    }
    .operation-user {
        float: right;
        .user-info {
            margin-right: 10px;
            float: left;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            .avatar {
                margin-right: 4px;
                img {
                    display: block;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
        }
        .login-out {
            float: right;
            line-height: 60px;
        }
    }

}

.el-aside {
    height: 100%;
    .wrap-el-menu {
        height: 100%;
        max-height: 100%;
        overflow-y: scroll;
        .el-menu {
            min-height: 100%;
            .el-menu-item {
                a {
                    display: block;
                    &.router-link-active {
                        color: #409EFF;
                    }
                }
            }

        }
        .el-menu-item-group__title {
            display: none;
        }
    }
}
</style>

<style lang="less">
.el-aside {
    height: 100%;
    .wrap-el-menu {
        .el-menu-item-group__title {
            display: none;
        }
    }
}
</style>
