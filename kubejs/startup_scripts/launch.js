let modpackId = "cabricality"

let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith("#") ? "#" : "") + domain + ":" + id.replace("#", "")
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let C = (id, x) => MOD("c", id, x)
let F = (id, x) => MOD("fabric", id, x)
let IV = (id, x) => MOD("indrev", id, x)
let AE2 = (id, x) => MOD("ae2", id, x)
let KB = (id, x) => MOD("kibe", id, x)
let PMD = (id, x) => MOD("promenade", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)

onEvent("item.registry", event => {
	//	Mechanism
	let registerMechanism = (name, localName, rarity) => {
		let id = name.toLowerCase() + "_mechanism"
		let incompleteId = "incomplete_" + id

		event.create(id)
			.texture(modpackId + ":/item/mechanism/" + id)
			.displayName(localName + "构件")
			.rarity(rarity ? rarity : RARITY_COMMON)

		event.create(incompleteId)
			.texture(modpackId + ":/item/mechanism/incomplete/" + incompleteId)
			.displayName(localName + "构件（半成品）")
			.rarity(rarity ? rarity : RARITY_COMMON)
	}
	let initMechanisms = () => {
		registerMechanism("Kinetic", "动力")
		registerMechanism("Sealed", "密封")
		registerMechanism("Infernal", "酷热")
		registerMechanism("Sturdy", "坚实")
		registerMechanism("Inductive", "超频")
		registerMechanism("Abstruse", "深邃")
		registerMechanism("Calculation", "智能")
	}

	//	Machine Parts
	let registerMachinePart = (name, localName) => {
		let id = name.replace(" ", "_").toLowerCase()

		event.create(id)
			.texture(modpackId + ":/item/machine_part/" + id)
			.displayName(localName)
	}
	let initMachineParts = () => {
		registerMachinePart("Saw Blade", "锯片")
	}

	//	Tools
	let registerSaw = (materialName, materialId, durability) => {
		let id = materialId + "_saw"

		event.create(id)
			.texture(modpackId + ":item/tool/saw/" + id)
			.displayName(materialName + "手锯")
			.maxDamage(durability)
	}
	let registerToolMaterial = (material, localName, durability) => {
		let id = material.replace(" ", "_").toLowerCase()
		registerSaw(localName, id, durability)
	}
	let initToolMaterials = () => {
		registerToolMaterial("Stone", "石", 131)
		registerToolMaterial("Iron", "铁", 250)
		registerToolMaterial("Diamond", "钻石", 1561)
		registerToolMaterial("Netherite", "下界合金", 2031)
	}

	//	Other items
	let registerTypicalItem = (name, localName) => {
		let id = name.replace(" ", "_").toLowerCase()
		event.create(id)
			.texture(modpackId + ":item/" + id)
			.displayName(localName)
	}
	let initTypicalItems = () => {
		registerTypicalItem("Stone Rod", "石棍")
		registerTypicalItem("Rubber", "橡胶")
		registerTypicalItem("Cured Rubber", "硫化橡胶")

		event.create("screwdriver")
			.texture(modpackId + ":item/screwdriver")
			.displayName("强化螺丝刀")
			.maxDamage(512)

		registerTypicalItem("Invar Ingot", "殷钢锭")
		registerTypicalItem("Nickel Ingot", "镍锭")
		registerTypicalItem("Nickel Nugget", "镍粒")
		registerTypicalItem("Enderium Ingot", "末影合金锭")
		registerTypicalItem("Nickel Compound", "镶边镍锭")
		registerTypicalItem("Invar Compound", "殷钢混合物")
		registerTypicalItem("Silicon Compound", "含硅化合物")

		registerTypicalItem("Ruby", "红宝石")
		registerTypicalItem("Sapphire", "蓝宝石")

		registerTypicalItem("Gold Coin", "金币")
		registerTypicalItem("Silver Coin", "银币")

		registerTypicalItem("Sand Ball", "沙球")
		registerTypicalItem("Coke Chunk", "小块焦炭")
		registerTypicalItem("Rough Sand", "粗砂")
		registerTypicalItem("Purified Sand", "高纯砂")

		registerTypicalItem("Nickel Dust", "镍粉")
		registerTypicalItem("Cobalt Dust", "钴粉")
		registerTypicalItem("Desh Dust", "戴斯粉")
		registerTypicalItem("Ostrum Dust", "紫金粉")
		registerTypicalItem("Calorite Dust", "耐热金属粉")
		registerTypicalItem("Emerald Dust", "绿宝石粉")
		registerTypicalItem("Diamond Dust", "钻石粉")

		registerTypicalItem("Basalz Shard", "玄武碎片")
		registerTypicalItem("Basalz Powder", "玄武粉末")
		registerTypicalItem("Blizz Cube", "暴雪结晶")
		registerTypicalItem("Blizz Powder", "暴雪粉末")

		registerTypicalItem("Ice Charge", "冰荷弹")
		registerTypicalItem("Earth Charge", "岩荷弹")
		registerTypicalItem("Lightning Charge", "电荷弹")

		registerTypicalItem("Circuit Scrap", "压印模板碎片")
		registerTypicalItem("Zinc Sheet", "锌板")
		registerTypicalItem("Matter Plastics", "物质条")

		event.create("coal_coke")
			.texture(modpackId + ":item/coal_coke")
			.displayName("焦炭")
			.burnTime(3200)

		event.create("incomplete_coke_chunk")
			.texture(modpackId + ":item/incomplete_coke_chunk")
			.displayName("小块焦炭（未完成）")

		event.create("earth_slimy_fern_leaf")
			.texture(modpackId + ":item/fern/leaf/earth_slimy_fern_leaf")
			.displayName("史莱姆蕨叶片")

		event.create("ender_slimy_fern_leaf")
			.texture(modpackId + ":item/fern/leaf/ender_slimy_fern_leaf")
			.displayName("史莱姆蕨叶片")

		event.create("sky_slimy_fern_leaf")
			.texture(modpackId + ":item/fern/leaf/sky_slimy_fern_leaf")
			.displayName("史莱姆蕨叶片")

		event.create("earth_slimy_fern_paste")
			.texture(modpackId + ":item/fern/paste/earth_slimy_fern_paste")
			.displayName("史莱姆蕨粉末")

		event.create("ender_slimy_fern_paste")
			.texture(modpackId + ":item/fern/paste/ender_slimy_fern_paste")
			.displayName("史莱姆蕨粉末")

		event.create("sky_slimy_fern_paste")
			.texture(modpackId + ":item/fern/paste/sky_slimy_fern_paste")
			.displayName("史莱姆蕨粉末")

		event.create("radiant_sheet")
			.texture(modpackId + ":item/radiant_sheet")
			.displayName("光辉板")
			.glow(true)

		event.create("radiant_coil")
			.texture(modpackId + ":item/radiant_coil")
			.displayName("光辉线圈")
			.glow(true)

		event.create("chromatic_resonator")
			.texture(modpackId + ":item/chromatic_resonator")
			.displayName("异彩共鸣器")
			.maxDamage(512)

		event.create("dye_entangled_singularity")
			.texture(modpackId + ":item/dye_entangled_singularity")
			.unstackable()
			.displayName("异彩奇点")

		event.create("flash_drive")
			.texture(modpackId + ":item/boot_medium")
			.displayName("闪存")
			.maxDamage(512)

		event.create("crushed_cobalt_ore")
			.texture(modpackId + ":item/crushed_cobalt_ore")
			.displayName("粉碎钴矿石")

		event.create("crushed_desh_ore")
			.texture(modpackId + ":item/crushed/crushed_desh_ore")
			.displayName("粉碎戴斯矿石")

		event.create("crushed_ostrum_ore")
			.texture(modpackId + ":item/crushed/crushed_ostrum_ore")
			.displayName("粉碎紫金矿石")

		event.create("crushed_calorite_ore")
			.texture(modpackId + ":item/crushed/crushed_calorite_ore")
			.displayName("粉碎耐热金属矿石")

		let processors = ["Calculation", "Logic", "Engineering"]
		let processorsLocalName = ["运算", "逻辑", "工程"]
		processors.forEach(name => {
			let id = name.toLowerCase()
			let localName = processorsLocalName[processors.indexOf(name)]
			event.create("incomplete_" + id + "_processor")
				.texture(modpackId + ":item/processor/incomplete_" + id + "_processor")
				.displayName(localName + "处理器（半成品）")
		})
	}

	//	Final init
	let initItems = () => {
		initMechanisms()
		initMachineParts()
		initToolMaterials()
		initTypicalItems()
	}
	initItems()
	let number = (name, localName) => {
		let id = name.toLowerCase()
		event.create(id)
			.texture(modpackId + ":item/number/" + id)
			.displayName(localName)
			.glow(true)
	}
	number("Zero", "0")
	number("One", "1")
	number("Two", "2")
	number("Three", "3")
	number("Four", "4")
	number("Five", "5")
	number("Six", "6")
	number("Seven", "7")
	number("Eight", "8")
	number("Nine", "9")
	number("Plus", "+")
	number("Minus", "-")
	number("Multiply", "×")
	number("Divide", "÷")
	number("Missingno", "NaN")

	/*
		event.create("number_array")
			.texture(modpackId + ":item/number/number_array")
			.displayName("Number Array")
			.glow(true)
	*/

	event.create('three_cast')
		.texture(modpackId + ":item/cast/three_cast")
		.displayName('整数铸模 (3)')
		.unstackable()

	event.create('eight_cast')
		.texture(modpackId + ":item/cast/eight_cast")
		.displayName('整数铸模 (8)')
		.unstackable()

	event.create('plus_cast')
		.texture(modpackId + ":item/cast/plus_cast")
		.displayName('运算符铸模 (+)')
		.unstackable()

	event.create('minus_cast')
		.texture(modpackId + ":item/cast/minus_cast")
		.displayName('运算符铸模 (-)')
		.unstackable()

	event.create('multiply_cast')
		.texture(modpackId + ":item/cast/multiply_cast")
		.displayName('运算符铸模 (×)')
		.unstackable()

	event.create('divide_cast')
		.texture(modpackId + ":item/cast/divide_cast")
		.displayName('运算符铸模 (÷)')
		.unstackable()
})

onEvent("block.registry", event => {
	//	Machine
	let registerMachine = (name, localName, layer) => {
		let id = name.toLowerCase() + "_machine"
		event.create(id)
			.model(modpackId + ":block/machine/" + id)
			.material("lantern")
			.hardness(3.0)
			.displayName(localName + "器")
			.notSolid()
			.renderType(layer)
			.tagBlock("create:wrench_pickup")
			.tagBlock("minecraft:mineable/pickaxe")
	}
	registerMachine("Extractor", "提取", "solid")
	registerMachine("Andesite", "安山机", "solid")
	registerMachine("Brass", "黄铜机", "translucent")
	registerMachine("Copper", "铜机", "cutout")
	registerMachine("Zinc", "锌机", "cutout")
	registerMachine("Enderium", "末影合金机", "cutout")
	registerMachine("Obsidian", "黑曜机", "translucent")

	let registerCasing = (name, localName) => {
		let id = name.toLowerCase() + "_casing"
		event.create(id)
			.model(modpackId + ":block/casing/" + id)
			.material("metal")
			.hardness(3.0)
			.displayName(localName + "机壳")
			.tagBlock("create:wrench_pickup")
			.tagBlock("minecraft:mineable/pickaxe")
	}
	registerCasing("Invar", "殷钢")
	registerCasing("Fluix", "福鲁伊克斯")
	registerCasing("Zinc", "锌")
	registerCasing("Enderium", "末影合金")

	event.create("computation_matrix")
		.model(modpackId + ":block/computation_matrix")
		.material("metal")
		.hardness(3.0)
		.displayName("智能矩阵")
		.tagBlock("minecraft:mineable/pickaxe")
})

onEvent("fluid.registry", event => {
	event.create("resin")
		.displayName("树脂")
		.thinTexture(0xaf7519)

	event.create("redstone")
		.displayName("熔融红石")
		.thinTexture(0x850b0e)
		.noBlock()

	event.create("sky_stone")
		.displayName("等离子态陨石")
		.thinTexture(0x404344)
		.noBlock()

	event.create("waste")
		.displayName("废液")
		.thinTexture(0x123d36)
		.noBlock()

	event.create("powered_water")
		.displayName("充能水")
		.thinTexture(0x76d0f9)

	event.create("coke")
		.displayName("液态焦炭")
		.thinTexture(0x323232)
		.noBlock()

	event.create("fine_sand")
		.displayName("细砂")
		.thickTexture(0xded6a4)
		.noBlock()

	let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
	event.create("raw_logic")
		.displayName("玻色-爱因斯坦凝聚态逻辑（未处理）")
		.thinTexture(0xE7FFCB)
		.noBlock()

	for (i = 0; i < 10; i++) {
		event.create("number_" + i)
			.displayName("玻色-爱因斯坦凝聚态逻辑 （" + i + "）")
			.thinTexture(colors[i])
			.noBlock()
			.noBucket()
	}
	event.create("matrix")
		.displayName("液态智能矩阵")
		.thinTexture(colors[0])
		.noBlock()

	event.create("molten_desh")
		.displayName("Molten Desh")
		.thickTexture(0xc88448)

	event.create("molten_ostrum")
		.displayName("Molten Ostrum")
		.thickTexture(0x6c4c59)

	event.create("molten_calorite")
		.displayName("Molten Calorite")
		.thickTexture(0x931d3b)
})

onEvent("item.modification", event => {
	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	colors.forEach(element => {
		event.modify("ae2:" + element + "_paint_ball", item => {
			item.maxStackSize = 1
		})
	});
})