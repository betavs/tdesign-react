export const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'doc',
    children: [
      {
        title: '快速开始',
        titleEn: 'Getting Started',
        name: 'getting-started',
        path: '/react/getting-started',
        component: () => import('@/site/docs/getting-started.md'),
        componentEn: () => import('@/site/docs/getting-started.en-US.md'),
      },
      {
        title: '最佳实践',
        titleEn: 'Starter Kit',
        name: 'quick-start',
        path: '/react/quick-start',
        component: () => import('@/site/docs/starter.md'),
        componentEn: () => import('@/site/docs/starter.en-US.md'),
      },
      {
        title: '更新日志',
        titleEn: 'CHANGELOG',
        name: 'changelog',
        path: '/react/changelog',
        component: () => import('@/CHANGELOG.md'),
      },
      {
        title: '组件概览',
        titleEn: 'Overview',
        name: 'overview',
        path: '/react/overview',
        component: () => import('@common/docs/web/overview.md'),
        componentEn: () => import('@common/docs/web/overview.en-US.md'),
      },
    ],
  },
  {
    title: '全局配置',
    titleEn: 'Global Config',
    type: 'doc',
    children: [
      {
        title: '全局特性配置',
        titleEn: 'Global Configuration',
        name: 'config',
        path: '/react/global-configuration',
        component: () => import('tdesign-react/config-provider/config-provider.md'),
        componentEn: () => import('tdesign-react/config-provider/config-provider.en-US.md'),
      },
      {
        title: '自定义主题',
        titleEn: 'Theme Customization',
        name: 'custom-theme',
        path: '/react/custom-theme',
        component: () => import('@common/theme.md'),
        componentEn: () => import('@common/theme.en-US.md'),
      },
      {
        title: '暗黑模式',
        titleEn: 'Dark Mode',
        name: 'dark-mode',
        path: '/react/dark-mode',
        component: () => import('@common/dark-mode.md'),
        componentEn: () => import('@common/dark-mode.en-US.md'),
      },
    ],
  },
  {
    title: '基础',
    titleEn: 'Base',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Button 按钮',
        titleEn: 'Button',
        name: 'button',
        path: '/react/components/button',
        component: () => import('tdesign-react/button/button.md'),
        componentEn: () => import('tdesign-react/button/button.en-US.md'),
      },
      {
        title: 'Icon 图标',
        titleEn: 'Icon',
        name: 'icon',
        path: '/react/components/icon',
        component: () => import('tdesign-react/icon/icon.md'),
        componentEn: () => import('tdesign-react/icon/icon.en-US.md'),
      },
      {
        title: 'Link 链接',
        titleEn: 'Link',
        name: 'link',
        path: '/react/components/link',
        component: () => import('tdesign-react/link/link.md'),
        componentEn: () => import('tdesign-react/link/link.en-US.md'),
      },
    ],
  },
  {
    title: '布局',
    titleEn: 'Layout',
    type: 'component',
    children: [
      {
        title: 'Divider 分割线',
        titleEn: 'Divider',
        name: 'divider',
        path: '/react/components/divider',
        component: () => import('tdesign-react/divider/divider.md'),
        componentEn: () => import('tdesign-react/divider/divider.en-US.md'),
      },
      {
        title: 'Grid 栅格',
        titleEn: 'Grid',
        name: 'grid',
        path: '/react/components/grid',
        component: () => import('tdesign-react/grid/grid.md'),
        componentEn: () => import('tdesign-react/grid/grid.en-US.md'),
      },
      {
        title: 'Layout 布局',
        titleEn: 'Layout',
        name: 'layout',
        path: '/react/components/layout',
        component: () => import('tdesign-react/layout/layout.md'),
        componentEn: () => import('tdesign-react/layout/layout.en-US.md'),
      },
      {
        title: 'Space 间距',
        titleEn: 'Space',
        name: 'space',
        path: '/react/components/space',
        component: () => import('tdesign-react/space/space.md'),
        componentEn: () => import('tdesign-react/space/space.en-US.md'),
      },
    ],
  },
  {
    title: '导航',
    titleEn: 'Navigation',
    type: 'component',
    children: [
      {
        title: 'Affix 固钉',
        titleEn: 'Affix',
        name: 'affix',
        path: '/react/components/affix',
        component: () => import('tdesign-react/affix/affix.md'),
        componentEn: () => import('tdesign-react/affix/affix.en-US.md'),
      },
      {
        title: 'Anchor 锚点',
        titleEn: 'Anchor',
        name: 'anchor',
        path: '/react/components/anchor',
        component: () => import('tdesign-react/anchor/anchor.md'),
        componentEn: () => import('tdesign-react/anchor/anchor.en-US.md'),
      },
      {
        title: 'BackTop 回到顶部',
        titleEn: 'BackTop',
        name: 'back-top',
        path: '/react/components/back-top',
        component: () => import('tdesign-react/back-top/back-top.md'),
        componentEn: () => import('tdesign-react/back-top/back-top.en-US.md'),
      },
      {
        title: 'Breadcrumb 面包屑',
        titleEn: 'Breadcrumb',
        name: 'breadcrumb',
        path: '/react/components/breadcrumb',
        component: () => import('tdesign-react/breadcrumb/breadcrumb.md'),
        componentEn: () => import('tdesign-react/breadcrumb/breadcrumb.en-US.md'),
      },
      {
        title: 'Dropdown 下拉菜单',
        titleEn: 'Dropdown',
        name: 'dropdown',
        path: '/react/components/dropdown',
        component: () => import('tdesign-react/dropdown/dropdown.md'),
        componentEn: () => import('tdesign-react/dropdown/dropdown.en-US.md'),
      },
      {
        title: 'Menu 导航菜单',
        titleEn: 'Menu',
        name: 'menu',
        path: '/react/components/menu',
        component: () => import('tdesign-react/menu/menu.md'),
        componentEn: () => import('tdesign-react/menu/menu.en-US.md'),
      },
      {
        title: 'Pagination 分页',
        titleEn: 'Pagination',
        name: 'pagination',
        path: '/react/components/pagination',
        component: () => import('tdesign-react/pagination/pagination.md'),
        componentEn: () => import('tdesign-react/pagination/pagination.en-US.md'),
      },
      {
        title: 'Steps 步骤条',
        titleEn: 'Steps',
        name: 'steps',
        path: '/react/components/steps',
        component: () => import('tdesign-react/steps/steps.md'),
        componentEn: () => import('tdesign-react/steps/steps.en-US.md'),
      },
      {
        title: 'StickyTool 侧边栏',
        titleEn: 'StickyTool',
        name: 'StickyTool',
        path: '/react/components/sticky-tool',
        component: () => import('tdesign-react/sticky-tool/sticky-tool.md'),
        componentEn: () => import('tdesign-react/sticky-tool/sticky-tool.en-US.md'),
      },
      {
        title: 'Tabs 选项卡',
        titleEn: 'Tabs',
        name: 'tabs',
        path: '/react/components/tabs',
        component: () => import('tdesign-react/tabs/tabs.md'),
        componentEn: () => import('tdesign-react/tabs/tabs.en-US.md'),
      },
    ],
  },
  {
    title: '输入',
    titleEn: 'Form',
    type: 'component',
    children: [
      {
        title: 'AutoComplete 自动填充',
        titleEn: 'AutoComplete',
        name: 'auto-complete',
        path: '/react/components/auto-complete',
        component: () => import('tdesign-react/auto-complete/auto-complete.md'),
        componentEn: () => import('tdesign-react/auto-complete/auto-complete.en-US.md'),
      },
      {
        title: 'Cascader 级联组件',
        titleEn: 'Cascader',
        name: 'cascader',
        path: '/react/components/cascader',
        component: () => import('tdesign-react/cascader/cascader.md'),
        componentEn: () => import('tdesign-react/cascader/cascader.en-US.md'),
      },
      {
        title: 'Checkbox 多选框',
        titleEn: 'Checkbox',
        name: 'checkbox',
        path: '/react/components/checkbox',
        component: () => import('tdesign-react/checkbox/checkbox.md'),
        componentEn: () => import('tdesign-react/checkbox/checkbox.en-US.md'),
      },
      {
        title: 'ColorPicker 颜色选择器',
        titleEn: 'ColorPicker',
        name: 'color-picker',
        path: '/react/components/color-picker',
        component: () => import('tdesign-react/color-picker/color-picker.md'),
        componentEn: () => import('tdesign-react/color-picker/color-picker.en-US.md'),
      },
      {
        title: 'DatePicker 日期选择器',
        titleEn: 'DatePicker',
        name: 'date-picker',
        path: '/react/components/date-picker',
        component: () => import('tdesign-react/date-picker/date-picker.md'),
        componentEn: () => import('tdesign-react/date-picker/date-picker.en-US.md'),
      },
      {
        title: 'Form 表单',
        titleEn: 'Form',
        name: 'form',
        path: '/react/components/form',
        component: () => import('tdesign-react/form/form.md'),
        componentEn: () => import('tdesign-react/form/form.en-US.md'),
      },
      {
        title: 'Input 输入框',
        titleEn: 'Input',
        name: 'input',
        path: '/react/components/input',
        component: () => import('tdesign-react/input/input.md'),
        componentEn: () => import('tdesign-react/input/input.en-US.md'),
      },
      {
        title: 'InputAdornment 输入装饰器',
        titleEn: 'InputAdornment',
        name: 'input-adornment',
        path: '/react/components/input-adornment',
        component: () => import('tdesign-react/input-adornment/input-adornment.md'),
        componentEn: () => import('tdesign-react/input-adornment/input-adornment.en-US.md'),
      },
      {
        title: 'InputNumber 数字输入框',
        titleEn: 'InputNumber',
        name: 'input-number',
        path: '/react/components/input-number',
        component: () => import('tdesign-react/input-number/input-number.md'),
        componentEn: () => import('tdesign-react/input-number/input-number.en-US.md'),
      },
      {
        title: 'TagInput 标签输入框',
        titleEn: 'TagInput',
        name: 'tag-input',
        docType: 'form',
        path: '/react/components/tag-input',
        component: () => import('tdesign-react/tag-input/tag-input.md'),
        componentEn: () => import('tdesign-react/tag-input/tag-input.en-US.md'),
      },
      {
        title: 'Radio 单选框',
        titleEn: 'Radio',
        name: 'radio',
        path: '/react/components/radio',
        component: () => import('tdesign-react/radio/radio.md'),
        componentEn: () => import('tdesign-react/radio/radio.en-US.md'),
      },
      {
        title: 'RangeInput 范围输入框',
        titleEn: 'RangeInput',
        name: 'range-input',
        path: '/react/components/range-input',
        component: () => import('tdesign-react/range-input/range-input.md'),
        componentEn: () => import('tdesign-react/range-input/range-input.en-US.md'),
      },
      {
        title: 'Select 选择器',
        titleEn: 'Select',
        name: 'select',
        path: '/react/components/select',
        component: () => import('tdesign-react/select/select.md'),
        componentEn: () => import('tdesign-react/select/select.en-US.md'),
      },
      {
        title: 'SelectInput 筛选器输入框',
        titleEn: 'SelectInput',
        name: 'select-input',
        docType: 'form',
        path: '/react/components/select-input',
        component: () => import('tdesign-react/select-input/select-input.md'),
        componentEn: () => import('tdesign-react/select-input/select-input.en-US.md'),
      },
      {
        title: 'Slider 滑块',
        titleEn: 'Slider',
        name: 'slider',
        path: '/react/components/slider',
        component: () => import('tdesign-react/slider/slider.md'),
        componentEn: () => import('tdesign-react/slider/slider.en-US.md'),
      },
      {
        title: 'Switch 开关',
        titleEn: 'Switch',
        name: 'switch',
        path: '/react/components/switch',
        component: () => import('tdesign-react/switch/switch.md'),
        componentEn: () => import('tdesign-react/switch/switch.en-US.md'),
      },
      {
        title: 'Textarea 多行文本框',
        titleEn: 'Textarea',
        name: 'textarea',
        path: '/react/components/textarea',
        component: () => import('tdesign-react/textarea/textarea.md'),
        componentEn: () => import('tdesign-react/textarea/textarea.en-US.md'),
      },
      {
        title: 'Transfer 穿梭框',
        titleEn: 'Transfer',
        name: 'transfer',
        path: '/react/components/transfer',
        component: () => import('tdesign-react/transfer/transfer.md'),
        componentEn: () => import('tdesign-react/transfer/transfer.en-US.md'),
      },
      {
        title: 'TimePicker 时间选择器',
        titleEn: 'TimePicker',
        name: 'time-picker',
        path: '/react/components/time-picker',
        component: () => import('tdesign-react/time-picker/time-picker.md'),
        componentEn: () => import('tdesign-react/time-picker/time-picker.en-US.md'),
      },
      {
        title: 'TreeSelect 树选择',
        titleEn: 'TreeSelect',
        name: 'tree-select',
        path: '/react/components/tree-select',
        component: () => import('tdesign-react/tree-select/tree-select.md'),
        componentEn: () => import('tdesign-react/tree-select/tree-select.en-US.md'),
      },
      {
        title: 'Upload 上传',
        titleEn: 'Upload',
        name: 'upload',
        path: '/react/components/upload',
        component: () => import('tdesign-react/upload/upload.md'),
        componentEn: () => import('tdesign-react/upload/upload.en-US.md'),
      },
    ],
  },
  {
    title: '数据展示',
    titleEn: 'Data Display',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Avatar 头像',
        titleEn: 'Avatar',
        name: 'avatar',
        path: '/react/components/avatar',
        component: () => import('tdesign-react/avatar/avatar.md'),
        componentEn: () => import('tdesign-react/avatar/avatar.en-US.md'),
      },
      {
        title: 'Badge 徽标',
        titleEn: 'Badge',
        name: 'badge',
        path: '/react/components/badge',
        component: () => import('tdesign-react/badge/badge.md'),
        componentEn: () => import('tdesign-react/badge/badge.en-US.md'),
      },
      {
        title: 'Calendar 日历',
        titleEn: 'Calendar',
        name: 'calendar',
        path: '/react/components/calendar',
        component: () => import('tdesign-react/calendar/calendar.md'),
        componentEn: () => import('tdesign-react/calendar/calendar.en-US.md'),
      },
      {
        title: 'Card 卡片',
        titleEn: 'Card',
        name: 'card',
        docType: 'data',
        path: '/react/components/card',
        component: () => import('tdesign-react/card/card.md'),
        componentEn: () => import('tdesign-react/card/card.en-US.md'),
      },
      {
        title: 'Collapse 折叠面板',
        titleEn: 'Collapse',
        name: 'collapse',
        docType: 'data',
        path: '/react/components/collapse',
        component: () => import('tdesign-react/collapse/collapse.md'),
        componentEn: () => import('tdesign-react/collapse/collapse.en-US.md'),
      },
      {
        title: 'Comment 评论',
        titleEn: 'Comment',
        name: 'comment',
        path: '/react/components/comment',
        component: () => import('tdesign-react/comment/comment.md'),
        componentEn: () => import('tdesign-react/comment/comment.en-US.md'),
      },
      {
        title: 'Descriptions 描述',
        titleEn: 'Descriptions',
        name: 'descriptions',
        path: '/react/components/descriptions',
        component: () => import('tdesign-react/descriptions/descriptions.md'),
        componentEn: () => import('tdesign-react/descriptions/descriptions.en-US.md'),
      },
      {
        title: 'Image 图片',
        titleEn: 'Image',
        name: 'image',
        path: '/react/components/image',
        component: () => import('tdesign-react/image/image.md'),
        componentEn: () => import('tdesign-react/image/image.en-US.md'),
      },
      {
        title: 'ImageViewer 图片预览',
        titleEn: 'ImageViewer',
        name: 'image-viewer',
        path: '/react/components/image-viewer',
        component: () => import('tdesign-react/image-viewer/image-viewer.md'),
        componentEn: () => import('tdesign-react/image-viewer/image-viewer.en-US.md'),
      },
      {
        title: 'List 列表',
        titleEn: 'List',
        name: 'list',
        path: '/react/components/list',
        component: () => import('tdesign-react/list/list.md'),
        componentEn: () => import('tdesign-react/list/list.en-US.md'),
      },
      {
        title: 'Loading 加载',
        titleEn: 'Loading',
        name: 'loading',
        path: '/react/components/loading',
        component: () => import('tdesign-react/loading/loading.md'),
        componentEn: () => import('tdesign-react/loading/loading.en-US.md'),
      },
      {
        title: 'Progress 进度条',
        titleEn: 'Progress',
        name: 'progress',
        path: '/react/components/progress',
        component: () => import('tdesign-react/progress/progress.md'),
        componentEn: () => import('tdesign-react/progress/progress.en-US.md'),
      },
      {
        title: 'Skeleton 骨架屏',
        titleEn: 'Skeleton',
        name: 'skeleton',
        path: '/react/components/skeleton',
        component: () => import('tdesign-react/skeleton/skeleton.md'),
        componentEn: () => import('tdesign-react/skeleton/skeleton.en-US.md'),
      },
      {
        title: 'Statistic 统计数值',
        titleEn: 'Statistic',
        name: 'statistic',
        path: '/react/components/statistic',
        component: () => import('tdesign-react/statistic/statistic.md'),
        componentEn: () => import('tdesign-react/statistic/statistic.en-US.md'),
      },
      {
        title: 'Swiper 轮播框',
        titleEn: 'Swiper',
        name: 'swiper',
        path: '/react/components/swiper',
        component: () => import('tdesign-react/swiper/swiper.md'),
        componentEn: () => import('tdesign-react/swiper/swiper.en-US.md'),
      },
      {
        title: 'Table 表格',
        titleEn: 'Table',
        name: 'table',
        path: '/react/components/table',
        component: () => import('tdesign-react/table/table.md'),
        componentEn: () => import('tdesign-react/table/table.en-US.md'),
      },
      {
        title: 'Tag 标签',
        titleEn: 'Tag',
        name: 'tag',
        path: '/react/components/tag',
        component: () => import('tdesign-react/tag/tag.md'),
        componentEn: () => import('tdesign-react/tag/tag.en-US.md'),
      },
      {
        title: 'Timeline 时间轴',
        titleEn: 'Timeline',
        name: 'timeline',
        path: '/react/components/timeline',
        component: () => import('tdesign-react/timeline/timeline.md'),
        componentEn: () => import('tdesign-react/timeline/timeline.en-US.md'),
      },
      {
        title: 'Tooltip 文字提示',
        titleEn: 'Tooltip',
        name: 'tooltip',
        path: '/react/components/tooltip',
        component: () => import('tdesign-react/tooltip/tooltip.md'),
        componentEn: () => import('tdesign-react/tooltip/tooltip.en-US.md'),
      },
      {
        title: 'Tree 树',
        titleEn: 'Tree',
        name: 'tree',
        path: '/react/components/tree',
        component: () => import('tdesign-react/tree/tree.md'),
        componentEn: () => import('tdesign-react/tree/tree.en-US.md'),
      },
      {
        title: 'Watermark 水印',
        titleEn: 'Watermark',
        name: 'watermark',
        path: '/react/components/watermark',
        component: () => import('tdesign-react/watermark/watermark.md'),
        componentEn: () => import('tdesign-react/watermark/watermark.en-US.md'),
      },
      {
        title: 'Rate 评分',
        titleEn: 'Rate',
        name: 'rate',
        docType: 'data',
        path: '/react/components/rate',
        component: () => import('tdesign-react/rate/rate.md'),
        componentEn: () => import('tdesign-react/rate/rate.en-US.md'),
      },
    ],
  },
  {
    title: '消息提醒',
    titleEn: 'Notifications',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Alert 警告提醒',
        titleEn: 'Alert',
        name: 'alert',
        path: '/react/components/alert',
        component: () => import('tdesign-react/alert/alert.md'),
        componentEn: () => import('tdesign-react/alert/alert.en-US.md'),
      },
      {
        title: 'Dialog 对话框',
        titleEn: 'Dialog',
        name: 'dialog',
        path: '/react/components/dialog',
        component: () => import('tdesign-react/dialog/dialog.md'),
        componentEn: () => import('tdesign-react/dialog/dialog.en-US.md'),
      },
      {
        title: 'Drawer 抽屉',
        titleEn: 'Drawer',
        name: 'drawer',
        path: '/react/components/drawer',
        component: () => import('tdesign-react/drawer/drawer.md'),
        componentEn: () => import('tdesign-react/drawer/drawer.en-US.md'),
      },
      {
        title: 'Guide 引导',
        titleEn: 'Guide',
        name: 'guide',
        path: '/react/components/guide',
        component: () => import('tdesign-react/guide/guide.md'),
      },
      {
        title: 'Message 全局提示',
        titleEn: 'Message',
        name: 'message',
        path: '/react/components/message',
        component: () => import('tdesign-react/message/message.md'),
        componentEn: () => import('tdesign-react/message/message.en-US.md'),
      },
      {
        title: 'Notification 消息通知',
        titleEn: 'Notification',
        name: 'notification',
        path: '/react/components/notification',
        component: () => import('tdesign-react/notification/notification.md'),
        componentEn: () => import('tdesign-react/notification/notification.en-US.md'),
      },
      {
        title: 'Popconfirm 气泡确认框',
        titleEn: 'Popconfirm',
        name: 'popconfirm',
        path: '/react/components/popconfirm',
        component: () => import('tdesign-react/popconfirm/popconfirm.md'),
        componentEn: () => import('tdesign-react/popconfirm/popconfirm.en-US.md'),
      },
      {
        title: 'Popup 弹出层',
        titleEn: 'Popup',
        name: 'popup',
        path: '/react/components/popup',
        component: () => import('tdesign-react/popup/popup.md'),
        componentEn: () => import('tdesign-react/popup/popup.en-US.md'),
      },
    ],
  },
];

const enDocs = docs.map((doc) => ({
  ...doc,
  title: doc.titleEn,
  children: doc?.children?.map((child) => ({
    title: child.titleEn,
    name: `${child.name}-en`,
    path: `${child.path}-en`,
    meta: { lang: 'en' },
    component: child.componentEn || child.component,
  })),
}));

export default { docs, enDocs };
