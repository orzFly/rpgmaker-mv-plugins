/*
 * MIT License
 *
 * Copyright (c) 2017 Yeechan Lu (orzFly) <https://orzfly.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*:
 * @author Yeechan Lu (orzFly)
 * @plugindesc A plugin to demonstrate the new Plugin Manager in RPG Maker MV v1.5.0.
 * @help
 * This plugin doesn't have any real functionalities.
 *
 * @param Scenarios
 * 
 * @param Credits Text
 * @parent Scenarios
 * @type note
 * @default "=== Plugin Author ===\nYeechan Lu (orzFly)\n\n=== Guide Author ===\nYeechan Lu (orzFly)\n"
 * 
 * @param Language Code
 * @parent Scenarios
 * @type select
 * @default en-US
 * @option Chinese (Simplified)
 * @value zh-CN
 * @option Chinese (Traditional)
 * @value zh-TW
 * @option English (United States)
 * @value en-US
 * @option Japanese (Japan)
 * @value ja-JP
 * 
 * @param Country Or Area
 * @parent Scenarios
 * @type combo
 * @default USA
 * @option USA
 * @option Japan
 * @option China
 * @option Taiwan
 * @option Hong Kong
 * @option Macau
 * 
 * @param Show Logo at Startup
 * @parent Scenarios
 * @default true
 * @type boolean
 * @on Show
 * @off Hide
 * 
 * @param Logo Image
 * @parent Show Logo at Startup
 * @default MadeWithMv
 * @require 1
 * @dir img/system/
 * @type file
 * 
 * @param Wait Time
 * @parent Show Logo at Startup
 * @default 160
 * @type number
 * @min 0
 * 
 * @param Quests
 * @parent Scenarios
 * 
 * @param Quest 1
 * @parent Quests
 * @type struct<Quest>
 * @default {"Name":"Say Hello to orzFly","Type":"main","Objective":"\"orzFly is looking for an adventurer with great passion.\\n\\nYou decided to meet with him under the great ginkgo in\\nthe center of the town.\"","Awards":"","Item Awards":"[\"{\\\"Item\\\":\\\"1\\\",\\\"Count\\\":\\\"10\\\"}\",\"{\\\"Item\\\":\\\"2\\\",\\\"Count\\\":\\\"10\\\"}\"]","Weapon Awards":"[\"{\\\"Weapon\\\":\\\"1\\\",\\\"Count\\\":\\\"1\\\"}\"]","Armor Awards":"[\"{\\\"Armor\\\":\\\"1\\\",\\\"Count\\\":\\\"1\\\"}\",\"{\\\"Armor\\\":\\\"2\\\",\\\"Count\\\":\\\"1\\\"}\",\"{\\\"Armor\\\":\\\"3\\\",\\\"Count\\\":\\\"1\\\"}\",\"{\\\"Armor\\\":\\\"4\\\",\\\"Count\\\":\\\"1\\\"}\"]","Gold Award":"500"}
 * 
 * @param Quest 2
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 3
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 4
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 5
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 6
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 7
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Control Demos
 * 
 * @param Basic Types
 * @parent Control Demos
 *
 * @param Text
 * @parent Basic Types
 * @type string
 * @default Ancient Power has awaken!
 *
 * @param Note
 * @parent Basic Types
 * @type note
 * @default "Aluxes: Eventually...\nAluxes: I can say something longer than one line!\nAluxes: This is super powerful!\norzFly: Oh well..."
 *
 * @param Numbers
 * @parent Basic Types
 *
 * @param Integer
 * @parent Numbers
 * @type number
 * @default 233
 *
 * @param Integer (-1000~1000)
 * @parent Numbers
 * @type number
 * @max 1000
 * @min -1000
 * @default -233
 *
 * @param Float
 * @parent Numbers
 * @type number
 * @default 2.33
 *
 * @param Float (-3.00~3.00)
 * @parent Numbers
 * @type number
 * @max 100
 * @min -100
 * @decimals 2
 * @default -2.33
 *
 * @param Files
 * @parent Basic Types
 *
 * @param All kind of files
 * @parent Files
 * @type file
 * @default audio/bgm/Ship3
 * 
 * @param Only images
 * @parent Files
 * @type file
 * @dir img/
 * @default characters/Actor1
 * 
 * @param Only characters
 * @parent Files
 * @type file
 * @dir img/characters/
 * @default Actor1
 * 
 * @param Only audios
 * @parent Files
 * @type file
 * @dir audio/
 * @default bgm/Ship3
 *
 * @param Only BGMs
 * @parent Files
 * @type file
 * @dir audio/bgm/
 * @default Ship3
 *
 * @param Object Selectors
 * @parent Basic Types
 * 
 * @param Animation
 * @type animation
 * @parent Object Selectors
 * @default 13
 * 
 * @param Actor
 * @type actor
 * @parent Object Selectors
 * @default 12
 * 
 * @param Class
 * @type class
 * @parent Object Selectors
 * @default 11
 * 
 * @param Skill
 * @type skill
 * @parent Object Selectors
 * @default 10
 * 
 * @param Item
 * @type item
 * @parent Object Selectors
 * @default 9
 * 
 * @param Weapon
 * @type weapon
 * @parent Object Selectors
 * @default 8
 * 
 * @param Armor
 * @type armor
 * @parent Object Selectors
 * @default 7
 * 
 * @param Enemy
 * @type enemy
 * @parent Object Selectors
 * @default 6
 * 
 * @param Troop
 * @type troop
 * @parent Object Selectors
 * @default 5
 * 
 * @param State
 * @type state
 * @parent Object Selectors
 * @default 4
 * 
 * @param Tileset
 * @type tileset
 * @parent Object Selectors
 * @default 3
 * 
 * @param Common Event
 * @type common_event
 * @parent Object Selectors
 * @default 2
 * 
 * @param Switch
 * @type switch
 * @parent Object Selectors
 * @default 1
 *
 * @param Variable
 * @type variable
 * @parent Object Selectors
 * @default 0
 *
 * @param Boolean
 * @parent Basic Types
 *
 * @param Default Label
 * @parent Boolean
 * @type boolean
 * @default false
 *
 * @param Custom Label
 * @parent Boolean
 * @type boolean
 * @default true
 * @on Enable
 * @off Disable
 *
 * @param Select
 * @parent Basic Types
 *
 * @param Label as Result
 * @type select
 * @parent Select
 * @default XP
 * @option XP
 * @option VX
 * @option VX Ace
 * @option MV
 *
 * @param Custom Result
 * @type select
 * @parent Select
 * @default 1.0
 * @option XP
 * @value 1.0
 * @option VX
 * @value 2.0
 * @option VX Ace
 * @value 2.1
 * @option MV
 * @value 3.0
 *
 * @param Combo
 * @type combo
 * @default XP
 * @parent Basic Types
 * @option XP
 * @option VX
 * @option VX Ace
 * @option MV
 *
 * @param Advanced Types
 * @parent Control Demos
 * 
 * @param Lists
 * @parent Advanced Types
 * 
 * @param Text List
 * @parent Lists
 * @type string[]
 * @default ["orzFly","orzDive","orzSwim"]
 * 
 * @param File List
 * @parent Lists
 * @type file[]
 * @dir
 * @require 1
 * @default ["img/animations/Absorb","audio/bgm/Ship3","audio/me/Fanfare1"]
 * 
 * @param Variable List
 * @parent Lists
 * @type variable[]
 * @default ["1","3","0","15"]
 * 
 * @param Structure
 * @parent Advanced Types
 * @type struct<TestStruct>
 * @default {"Text":"orzFly","Note":"\"The quick brown fox jumps over the lazy dog.\\nThe lazy dog jumps over the quick brown fox.\\nThe quick brown fox jumps over the quick brown fox.\\nThe lazy dog jumps over the lazy dog.\"","Number":"233","Item":"1","Animation":"1","File (img/)":"system/GameOver"}
 * 
 * @param Structure List
 * @parent Advanced Types
 * @type struct<TestStruct>[]
 * @default ["{\"Text\":\"orzFly\",\"Note\":\"\\\"The quick brown fox jumps over the lazy dog.\\\\nThe lazy dog jumps over the quick brown fox.\\\\nThe quick brown fox jumps over the quick brown fox.\\\\nThe lazy dog jumps over the lazy dog.\\\"\",\"Number\":\"233\",\"Item\":\"1\",\"Animation\":\"1\",\"File (img/)\":\"system/GameOver\"}"]
 */
/*~struct~TestStruct:
 * @param Text
 * @type string
 * 
 * @param Note
 * @type note
 * 
 * @param Number
 * @type number
 * 
 * @param Item
 * @type item
 * 
 * @param Animation
 * @type animation
 * @require 1
 * 
 * @param File (img/)
 * @type file
 * @dir img/
 * @require 1
 */
/*~struct~Quest:
 * @param Name
 * @type string
 * 
 * @param Type
 * @type select
 * @option Main Quest
 * @value main
 * @option Side Quest
 * @value side
 * @option Shrine Quest
 * @value shrine
 * @option Memories
 * @value memories
 * @default side
 * 
 * @param Objective
 * @type note
 * 
 * @param Awards
 * 
 * @param Item Awards
 * @parent Awards
 * @type struct<ItemAward>[]
 * @default []
 * 
 * @param Weapon Awards
 * @parent Awards
 * @type struct<WeaponAward>[]
 * @default []
 * 
 * @param Armor Awards
 * @parent Awards
 * @type struct<ArmorAward>[]
 * @default []
 * 
 * @param Gold Award
 * @parent Awards
 * @type number
 * @max 99999999
 * @min 0
 * @default 0
 * 
 */
/*~struct~ItemAward:
 * @param Item
 * @type item
 * 
 * @param Count
 * @type number
 * @min 1
 * @max 99
 * @default 1
 */
/*~struct~WeaponAward:
 * @param Weapon
 * @type weapon
 * 
 * @param Count
 * @type number
 * @min 1
 * @max 99
 * @default 1
 */
/*~struct~ArmorAward:
 * @param Armor
 * @type armor
 * 
 * @param Count
 * @type number
 * @min 1
 * @max 99
 * @default 1
 */
/*:zh
 * @author Yeechan Lu (orzFly)
 * @plugindesc 用于演示 RPG Maker MV 1.5 插件管理器新功能的范例插件。
 * @help
 * 本插件没有任何实质性的功能，只是为了演示编辑器。
 *
 * @param Scenarios
 * @text 使用场景
 * 
 * @param Credits Text
 * @text 致谢文字
 * @parent Scenarios
 * @type note
 * @default "=== 插件作者 ===\nYeechan Lu (orzFly)\n\n=== 教程作者 ===\nYeechan Lu (orzFly)\n"
 * 
 * @param Language Code
 * @text 语言代码
 * @parent Scenarios
 * @type select
 * @default en-US
 * @option 中文（简体）
 * @value zh-CN
 * @option 中文（繁体）
 * @value zh-TW
 * @option 英语（美国）
 * @value en-US
 * @option 日语（日本）
 * @value ja-JP
 * 
 * @param Country Or Area
 * @text 国家或地区
 * @parent Scenarios
 * @type combo
 * @default USA
 * @option USA
 * @option Japan
 * @option China
 * @option Taiwan
 * @option Hong Kong
 * @option Macau
 * 
 * @param Show Logo at Startup
 * @text 启动时显示 Logo
 * @parent Scenarios
 * @default true
 * @type boolean
 * @on 显示
 * @off 隐藏
 * 
 * @param Logo Image
 * @text Logo 图片
 * @parent Show Logo at Startup
 * @default MadeWithMv
 * @require 1
 * @dir img/system/
 * @type file
 * 
 * @param Wait Time
 * @text 等待时间
 * @parent Show Logo at Startup
 * @default 160
 * @type number
 * @min 0
 * 
 * @param Quests
 * @text 任务
 * @parent Scenarios
 * 
 * @param Quest 1
 * @text 任务 1
 * @parent Quests
 * @type struct<Quest>
 * @default {"Name":"跟 orzFly 打个招呼","Type":"main","Objective":"\"orzFly 在寻找一位充满热情的冒险者。\\n\\n你决定去镇子中心的巨大银杏树下和他聊聊。\"","Awards":"","Item Awards":"[\"{\\\"Item\\\":\\\"1\\\",\\\"Count\\\":\\\"10\\\"}\",\"{\\\"Item\\\":\\\"2\\\",\\\"Count\\\":\\\"10\\\"}\"]","Weapon Awards":"[\"{\\\"Weapon\\\":\\\"1\\\",\\\"Count\\\":\\\"1\\\"}\"]","Armor Awards":"[\"{\\\"Armor\\\":\\\"1\\\",\\\"Count\\\":\\\"1\\\"}\",\"{\\\"Armor\\\":\\\"2\\\",\\\"Count\\\":\\\"1\\\"}\",\"{\\\"Armor\\\":\\\"3\\\",\\\"Count\\\":\\\"1\\\"}\",\"{\\\"Armor\\\":\\\"4\\\",\\\"Count\\\":\\\"1\\\"}\"]","Gold Award":"500"}
 * 
 * @param Quest 2
 * @text 任务 2
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 3
 * @text 任务 3
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 4
 * @text 任务 4
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 5
 * @text 任务 5
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 6
 * @text 任务 6
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Quest 7
 * @text 任务 7
 * @parent Quests
 * @type struct<Quest>
 * 
 * @param Control Demos
 * @text 控件演示
 * 
 * @param Basic Types
 * @text 基础类型
 * @parent Control Demos
 *
 * @param Text
 * @text 文本
 * @parent Basic Types
 * @type string
 * @default 古代力量觉醒啦！
 *
 * @param Note
 * @text 备注
 * @parent Basic Types
 * @type note
 * @default "阿尔西斯: 终于……\n阿尔西斯: 我可以说好几行的话了！\n阿尔西斯: 好厉害啊！\norzFly: 好的吧……"
 *
 * @param Numbers
 * @text 数字
 * @parent Basic Types
 *
 * @param Integer
 * @text 整数
 * @parent Numbers
 * @type number
 * @default 233
 *
 * @param Integer (-1000~1000)
 * @text 整数 (-1000~1000)
 * @parent Numbers
 * @type number
 * @max 1000
 * @min -1000
 * @default -233
 *
 * @param Float
 * @text 小数
 * @parent Numbers
 * @type number
 * @default 2.33
 *
 * @param Float (-3.00~3.00)
 * @text 小数 (-3.00~3.00)
 * @parent Numbers
 * @type number
 * @max 100
 * @min -100
 * @decimals 2
 * @default -2.33
 *
 * @param Files
 * @text 文件
 * @parent Basic Types
 *
 * @param All kind of files
 * @text 各种类型的文件
 * @parent Files
 * @type file
 * @default audio/bgm/Ship3
 * 
 * @param Only images
 * @text 仅限图片
 * @parent Files
 * @type file
 * @dir img/
 * @default characters/Actor1
 * 
 * @param Only characters
 * @text 仅限行走图
 * @parent Files
 * @type file
 * @dir img/characters/
 * @default Actor1
 * 
 * @param Only audios
 * @text 仅限音频
 * @parent Files
 * @type file
 * @dir audio/
 * @default bgm/Ship3
 *
 * @param Only BGMs
 * @text 仅限 BGM
 * @parent Files
 * @type file
 * @dir audio/bgm/
 * @default Ship3
 *
 * @param Object Selectors
 * @text 对象选择器
 * @parent Basic Types
 * 
 * @param Animation
 * @text 动画
 * @type animation
 * @parent Object Selectors
 * @default 13
 * 
 * @param Actor
 * @text 角色
 * @type actor
 * @parent Object Selectors
 * @default 12
 * 
 * @param Class
 * @text 职业
 * @type class
 * @parent Object Selectors
 * @default 11
 * 
 * @param Skill
 * @text 技能
 * @type skill
 * @parent Object Selectors
 * @default 10
 * 
 * @param Item
 * @text 物品
 * @type item
 * @parent Object Selectors
 * @default 9
 * 
 * @param Weapon
 * @text 武器
 * @type weapon
 * @parent Object Selectors
 * @default 8
 * 
 * @param Armor
 * @text 防具
 * @type armor
 * @parent Object Selectors
 * @default 7
 * 
 * @param Enemy
 * @text 敌人
 * @type enemy
 * @parent Object Selectors
 * @default 6
 * 
 * @param Troop
 * @text 敌群
 * @type troop
 * @parent Object Selectors
 * @default 5
 * 
 * @param State
 * @text 状态
 * @type state
 * @parent Object Selectors
 * @default 4
 * 
 * @param Tileset
 * @text 图块
 * @type tileset
 * @parent Object Selectors
 * @default 3
 * 
 * @param Common Event
 * @text 公共事件
 * @type common_event
 * @parent Object Selectors
 * @default 2
 * 
 * @param Switch
 * @text 开关
 * @type switch
 * @parent Object Selectors
 * @default 1
 *
 * @param Variable
 * @text 变量
 * @type variable
 * @parent Object Selectors
 * @default 0
 *
 * @param Boolean
 * @text 布尔值
 * @parent Basic Types
 *
 * @param Default Label
 * @text 默认标签
 * @parent Boolean
 * @type boolean
 * @default false
 *
 * @param Custom Label
 * @text 自定义标签
 * @parent Boolean
 * @type boolean
 * @default true
 * @on 启用
 * @off 禁用
 *
 * @param Select
 * @text 单选框
 * @parent Basic Types
 *
 * @param Label as Result
 * @text 标签即结果
 * @type select
 * @parent Select
 * @default XP
 * @option XP
 * @option VX
 * @option VX Ace
 * @option MV
 *
 * @param Custom Result
 * @text 自定义结果
 * @type select
 * @parent Select
 * @default 1.0
 * @option XP
 * @value 1.0
 * @option VX
 * @value 2.0
 * @option VX Ace
 * @value 2.1
 * @option MV
 * @value 3.0
 *
 * @param Combo
 * @text 复合框
 * @type combo
 * @default XP
 * @parent Basic Types
 * @option XP
 * @option VX
 * @option VX Ace
 * @option MV
 *
 * @param Advanced Types
 * @text 高级类型
 * @parent Control Demos
 * 
 * @param Lists
 * @text 列表
 * @parent Advanced Types
 * 
 * @param Text List
 * @text 文本列表
 * @parent Lists
 * @type string[]
 * @default ["orzFly","orzDive","orzSwim"]
 * 
 * @param File List
 * @text 文件列表
 * @parent Lists
 * @type file[]
 * @dir
 * @require 1
 * @default ["img/animations/Absorb","audio/bgm/Ship3","audio/me/Fanfare1"]
 * 
 * @param Variable List
 * @text 变量列表
 * @parent Lists
 * @type variable[]
 * @default ["1","3","0","15"]
 * 
 * @param Structure
 * @parent Advanced Types
 * @text 结构
 * @type struct<TestStruct>
 * @default {"Text":"orzFly","Note":"\"那只敏捷的棕毛狐狸跃过那只懒狗。\\n那只懒狗跃过那只敏捷的棕毛狐狸。\\n那只敏捷的棕毛狐狸跃过那只敏捷的棕毛狐狸。\\n那只懒狗跃过那只懒狗。\"","Number":"233","Item":"1","Animation":"1","File (img/)":"system/GameOver"}
 * 
 * @param Structure List
 * @parent Advanced Types
 * @text 结构列表
 * @type struct<TestStruct>[]
 * @default ["{\"Text\":\"orzFly\",\"Note\":\"\\\"那只敏捷的棕毛狐狸跃过那只懒狗。\\\\n那只懒狗跃过那只敏捷的棕毛狐狸。\\\\n那只敏捷的棕毛狐狸跃过那只敏捷的棕毛狐狸。\\\\n那只懒狗跃过那只懒狗。\\\"\",\"Number\":\"233\",\"Item\":\"1\",\"Animation\":\"1\",\"File (img/)\":\"system/GameOver\"}"]
 */
/*~struct~TestStruct:zh
 * @param Text
 * @text 文本
 * @type string
 * 
 * @param Note
 * @text 备注
 * @type note
 * 
 * @param Number
 * @text 数字
 * @type number
 * 
 * @param Item
 * @text 物品
 * @type item
 * 
 * @param Animation
 * @text 动画
 * @type animation
 * @require 1
 * 
 * @param File (img/)
 * @text 文件 (img/)
 * @type file
 * @dir img/
 * @require 1
 */
/*~struct~Quest:zh
 * @param Name
 * @text 名称
 * @type string
 * 
 * @param Type
 * @text 类型
 * @type select
 * @option 主线任务
 * @value main
 * @option 支线任务
 * @value side
 * @option 试炼任务
 * @value shrine
 * @option 回忆
 * @value memories
 * @default side
 * 
 * @param Objective
 * @text 目标
 * @type note
 * 
 * @param Awards
 * @text 奖励
 * 
 * @param Item Awards
 * @text 物品奖励
 * @parent Awards
 * @type struct<ItemAward>[]
 * @default []
 * 
 * @param Weapon Awards
 * @text 武器奖励
 * @parent Awards
 * @type struct<WeaponAward>[]
 * @default []
 * 
 * @param Armor Awards
 * @text 防具奖励
 * @parent Awards
 * @type struct<ArmorAward>[]
 * @default []
 * 
 * @param Gold Award
 * @text 金钱奖励
 * @parent Awards
 * @type number
 * @max 99999999
 * @min 0
 * @default 0
 * 
 */
/*~struct~ItemAward:zh
 * @param Item
 * @text 物品
 * @type item
 * 
 * @param Count
 * @text 数量
 * @type number
 * @min 1
 * @max 99
 * @default 1
 */
/*~struct~WeaponAward:zh
 * @param Weapon
 * @text 武器
 * @type weapon
 * 
 * @param Count
 * @text 数量
 * @type number
 * @min 1
 * @max 99
 * @default 1
 */
/*~struct~ArmorAward:zh
 * @param Armor
 * @text 防具
 * @type armor
 * 
 * @param Count
 * @text 数量
 * @type number
 * @min 1
 * @max 99
 * @default 1
 */