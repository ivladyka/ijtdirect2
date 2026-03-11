   var cartFormAtt, posAtt, posAttIndex, bcsnid, gqlToken, bcsn_url, bcsn_base_url, bcsn_remote_url, useRemote, post, onPost, onSuccess, onFail, previewUrl, cbStockNotifyCheckStock, cbStockNotifyMe, formFocus, bcsn_disable; cartFormAtt = 'data-cart-item-add=""'; posAtt = 'class="productView-options"'; posAttIndex = ''; bcsnid = "bcsn_stockNotify"; gqlToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9panRkaXJlY3Qtc2FuZGJveC5teWJpZ2NvbW1lcmNlLmNvbSJdLCJlYXQiOjIxNDc0ODM2NDYsImlhdCI6MTY3NzUwNDQ4MywiaXNzIjoiQkMiLCJzaWQiOjEwMDAzMzU2NTksInN1YiI6ImJpNHgyYm9xMzAwM3ViMnBlYjZwaHI4ajEzM2xxeHYiLCJzdWJfdHlwZSI6MiwidG9rZW5fdHlwZSI6MX0.dnNnMRqPoyoy06a0Pqh32yvNO9yQ7VBMfUCbY3I1ItlpJrh0eE3s9YRFXRUMBf2KatI-nxmAcLm1GBoSthncxw'; bcsn_url = "https://ijtdirect.co.uk/graphql"; bcsn_base_url = "https://ijtdirect.co.uk"; bcsn_useRemote = "false"; post = "https://stocknotify.becloudify.com/stocknotify/api/notify/n8jwhmma29"; var h = '<div id="bcsn_div" class="alertBox productAttributes-message" style="border-color:#e5e5e5;border-style:solid;background-color:unset;padding:10px"><p>We can let you know when this is back in stock</p><p id="bcsn_form_err" style="color:red;display:none">Please enter all required product option.</p><p id="bcsn_email_err" style="color:red;display:none">Please enter a valid email.</p><input style="width:100%" class="form-input" type="text" id="bcsn_email" name="bcsn_email" value="" placeholder="Your Email Address"><br><input type="hidden" id="recaptchaToken" name="recaptchaToken" value=""><div id="recaptchaV2"></div><div style="text-align:right;padding-top:10px"><a id="bcsn_formSubmitButton" style="margin:0;width:100%" class="button button--primary" href="javascript:cbStockNotifyMeFunction();">Email me when back in stock</a></div></div><div><p id="bcsn_email_confirm" style="color:red;display:none">Thank you, we will let you know once it is back in stock.</p><div><div><p id="bcsn_email_post_err" style="color:red;display:none">Sorry something went wrong please <a href="javascript:cbStockNotifyForm(bcsn_formDisplay);">try again</a>.</p><div></div></div></div></div>'; var bcsn_recaptchaSiteKey = ''; var modal = '#modal'; var modalEnabled = true; var bcsn_preorderEnabled = false; var bcsn_preorderLabel = 'Pre-Order Now'; var bcsn_nonPurchasableEnabled = false; onLoad = function (data) { $("#bcsn_form_err").css("display", "none"); $("#bcsn_email_err").css("display", "none"); $("#bcsn_div").css("display", "block"); $("#bcsn_email_post_err").css("display", "none"); $("#bcsn_email_confirm").css("display", "none"); if (bcsn_recaptchaSiteKey.trim().length > 0) { $("#bcsn_formSubmitButton").css("display", "none"); };; }; onLoaded = function (data) { return; }; onPost = function (data) { if (!bcsn_validForm()) { $("#bcsn_form_err").css("display", "block"); return null; }; if (cbIsEmail($("#bcsn_email").val())) { return data; } else { $("#bcsn_email_err").css("display", "block"); return null; };; }; onSuccess = function (data) { $("#bcsn_div").css("display", "none"); $("#bcsn_email_confirm").css("display", "block");; }; onFail = function (data) { $("#bcsn_div").css("display", "none"); $("#bcsn_email_post_err").css("display", "block");; }; var previewUrlPath = "https://stocknotify.becloudify.com/stocknotify/api/script/n8jwhmma29"; var cbStockNotifyCheckStockFunctionString = "cbStockNotifyCheckStock"; var cbStockNotifyCheckStockRemoteFunctionString = "cbStockNotifyCheckStock"; var cbStockNotifyMeFunctionString = "cbStockNotifyMe"; formFocus = false; bcsn_disable = false; bcsn_oosDropdownEnabled = true; var bcsn_posAttArray = ["class='alertBox productAttributes-message'", "data-cart-item-add=''", "data-quantity-change=''", "class='socialLinks'", "data-wishlist-add=''", "class='alertBox alertBox--error'", "data-product-option-change=''"]; bcsn_channelId = 1;



            $(document).ready(function () {
                bcsn_posAttArray = [];

                setTimeout(function () {
                    cbStockNotifyCheckStock();
                }, 1000);
                setTimeout(function () {
                    cbStockNotifyCheckStock();
                }, 1500);
                setTimeout(function () {
                    cbStockNotifyCheckStock();
                }, 2500);
                setTimeout(function () {
                    cbStockNotifyCheckStock();
                }, 3500);
                setTimeout(function () {
                    cbStockNotifyCheckStock();
                }, 4500);
            })

            window.jQuery = window.$ = jQuery;

            var cbStockNotifyCheckStockFunction = eval(cbStockNotifyCheckStockFunctionString),
                cbStockNotifyCheckStockRemoteFunction = eval(cbStockNotifyCheckStockRemoteFunctionString),
                cbStockNotifyMeFunction = eval(cbStockNotifyMeFunctionString),
                cf = "",
                pos = "",
                bcsn = "",
                baseUrl2 = window.location.origin,
                bcsn_remote_url,
                bcsn_remote_url2,
                bcsn_formDisplay,
                bcsnName,
                bcsnidBase = bcsnid,
                body = "body",
                currentBody = body,
                modalObserver,
                modalObserver2,
                bcsn_blacklisted = ["sample@email.tst", "testing@example.com"],
                bcsn_remoteData,
                bcsn_graphqlData;

            function bcsn_init() {
                if ($(bcsnName) && $(bcsnName).length > 0 && $(bcsnName).remove(), bcsnid = "body" != currentBody ? bcsnidBase + "_" + currentBody.replace("#", "") : bcsnidBase, bcsnName = "#" + bcsnid, null == (bcsn = $(bcsnName)) || 0 == bcsn.length) {
                    if (modalEnabled)
                        try {
                            bcsn_deregisterObserve()
                        } catch (err) { }

                    if (cf = $(currentBody).find("[" + cartFormAtt + "]"), (pos = $(currentBody).find("[" + posAtt + "]")) && pos.length > 0)
                        posAttIndex && parseInt(posAttIndex) && pos && (pos = pos[parseInt(posAttIndex)]);
                    else {
                        let k = 0;
                        for (; 0 == pos.length && k < bcsn_posAttArray.length;)
                            pos = $(currentBody).find("[" + bcsn_posAttArray[k++] + "]")
                    }
                    "true" == bcsn_useRemote || 1 == bcsn_useRemote ? (
                        cf.on("change", cbStockNotifyCheckStockRemoteFunction), bcsn_nonPurchasableEnabled && (cf.on("change", (() => {
                            setTimeout(cbStockNotifyCheckStockRemoteFunction, 500)
                        })), cf.on("change", (() => {
                            setTimeout(cbStockNotifyCheckStockRemoteFunction, 1e3)
                        })))
                    ) : (
                        cf.on("change", cbStockNotifyCheckStockFunction)
                    );

                    var div = document.createElement("div");

                    if (div.style = "display:none", div.id = bcsnid, pos && pos.after(div), (bcsn = $(bcsnName)).append('<form id="bcsn_stockNotifyForm">' + h + "</from>"), modalEnabled)
                        try {
                            bcsn_registerObserve()
                        } catch (err) { }
                }
                bcsn_formDisplay = !1,
                    bcsn_remote_url = bcsn_base_url + "/remote/v1/product-attributes/",
                    bcsn_remote_url2 = baseUrl2 + "/remote/v1/product-attributes/",
                    $.bcsnUrlParam = function (name) {
                        var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
                        return null !== results && (results[1] || 0)
                    },
                    bcsnCheckPreview(),

                    bcsn_preorderEnabled && (bcsn_checkPreOrder(), setTimeout(bcsn_checkPreOrder, 500), setTimeout(bcsn_checkPreOrder, 1e3), setTimeout(bcsn_checkPreOrder, 2e3)),
                    bcsn_oosDropdownEnabled && (bcsn_selectOnClick(), bcsn_removeDisabledOptionWithTimer())


           

            }
       
            function bcsnCheckPreview() {
                if ("true" == $.bcsnUrlParam("bcsn_preview") && $("#bcsn_storefront_preview").length <= 0) {
                    $(bcsnName) && $(bcsnName).length >= 0 && $(bcsnName).remove(),
                        $("#bcsn_storefront").html("");
                    var s = "script";
                    $("<" + s + ">").attr("id", "bcsn_storefront_preview").attr("src", previewUrlPath).appendTo("head")
                }
            }


            function cbStockNotifyCheckStock() {
                const $stockLevelIndicator = $('#pdp-out-of-stock-message');

                //custom
                let page = $('.type-product')
                console.log("cbStockNotifyCheckStock");
                console.log(page);
                console.log($stockLevelIndicator);
                if (page.length <= 0) {
                    cbStockNotifyForm(false);
                    return;
                }

                console.log($stockLevelIndicator.length);
                if ($stockLevelIndicator.length) {
                    console.log("cbStockNotifyCheckStock true");
                    console.log($stockLevelIndicator.length);
                    cbStockNotifyForm(true);
                } else {
                    console.log("cbStockNotifyCheckStock false");
                    console.log($stockLevelIndicator.length);
                 
                }
            }

            function cbStockNotifyCheckStock_purchasableOnly() {
                var data = cf.serialize(),
                    body = ($("dl").find('*[itemprop="sku"]').html(), (data = unescape(data)).split("&")),
                    pId = "",
                    attrs = "[";
                body.forEach((e => {
                    if (0 == e.indexOf("product_id="))
                        pId = e.substring(11, e.length);
                    else if (0 == e.indexOf("attribute[") && e.indexOf("]=") + 2 < e.length) {
                        var i = e.indexOf("]");
                        attrs += "{optionEntityId:" + parseInt(e.substring(10, i)) + ",valueEntityId:" + parseInt(e.substring(i + 2, e.length)) + "}"
                    }
                })),
                    attrs += "]",
                    query = "query{site{product(entityId:" + pId + " optionValueIds: " + attrs + "){name sku availabilityV2{status} inventory{isInStock} variants(optionValueIds: " + attrs + "){edges{node{sku entityId}}} }}}";
                try {
                    pId && (fetch(bcsn_url, {
                        method: "POST",
                        credentials: "include",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + gqlToken
                        },
                        body: JSON.stringify({
                            query: query
                        })
                    }).catch((function () { })).then((res => res.json())).then((data => {
                        bcsn_graphqlData = data,
                            data && data.data && data.data.site && cbStockNotifyForm("Unavailable" == data.data.site.product.availabilityV2.status)
                    })).catch((function () { })), bcsn_base_url != baseUrl2 && fetch(baseUrl2 + "/graphql", {
                        method: "POST",
                        credentials: "include",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + gqlToken
                        },
                        body: JSON.stringify({
                            query: query
                        })
                    }).catch((function () { })).then((res => res.json())).then((data => {
                        data && data.data && data.data.site && cbStockNotifyForm("Unavailable" == data.data.site.product.availabilityV2.status)
                    })).catch((function () { })))
                } catch (err) { }
            }

            function cbStockNotifyCheckStockWP() {
                var pid = $(currentBody).find("[data-js='bc-product-pricing']").data("product-price-id"),
                    vid = $(currentBody).find("[data-js='variant_id']").val(),
                    variants = $(currentBody).find("[data-js='product-variants-object']").data("variants");
                if (null != variants && 0 != variants.length || cbStockNotifyForm(!0), pid && vid && variants) {
                    var variantArray = variants.filter((x => x.variant_id == vid));
                    if (variantArray && variantArray.length > 0) {
                        var inventory = variantArray[0].inventory;
                        inventory && inventory > 0 ? cbStockNotifyForm(!1) : cbStockNotifyForm(!0)
                    }
                } else
                    cbStockNotifyForm(!0)
            }

            function cbStockNotifyCheckStockRemote() {
                var data = cf.serialize(),
                    body = ($("dl").find('*[itemprop="sku"]').html(), (data = unescape(data)).split("&")),
                    pId = "",
                    attrs = "[";
                body.forEach((e => {
                    if (0 == e.indexOf("product_id="))
                        pId = e.substring(11, e.length);
                    else if (0 == e.indexOf("attribute[") && e.indexOf("]=") + 2 < e.length) {
                        var i = e.indexOf("]");
                        attrs += "{optionEntityId:" + parseInt(e.substring(10, i)) + ",valueEntityId:" + parseInt(e.substring(i + 2, e.length)) + "}"
                    }
                })),
                    attrs += "]",
                    query = "query{site{product(entityId:" + pId + " optionValueIds: " + attrs + "){name sku availabilityV2{status} inventory{isInStock} variants(optionValueIds: " + attrs + "){edges{node{sku entityId}}} }}}";
                try {
                    pId && fetch(bcsn_remote_url + pId, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: data
                    }).catch((function () { })).then((res => res.json())).then((data => {
                        data && data.data && (bcsn_remoteData = data, cbStockNotifyForm(0 == data.data.instock && (!0 === bcsn_nonPurchasableEnabled || !0 === data.data.purchasable) || !0 === bcsn_nonPurchasableEnabled && !1 === data.data.purchasable))
                    })).catch((function () { }))
                } catch (err) { }
                bcsn_base_url != baseUrl2 && pId && fetch(bcsn_remote_url2 + pId, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: data
                }).catch((function () { })).then((res => res.json())).then((data => {
                    data && data.data && (bcsn_remoteData = data, cbStockNotifyForm(0 == data.data.instock && (!0 === bcsn_nonPurchasableEnabled || !0 === data.data.purchasable) || !0 === bcsn_nonPurchasableEnabled && !1 === data.data.purchasable))
                })).catch((function () { }))
            }

            function cbStockNotifyCheckStockRemote_purchasableOnly() {
                var data = cf.serialize(),
                    body = ($("dl").find('*[itemprop="sku"]').html(), (data = unescape(data)).split("&")),
                    pId = "",
                    attrs = "[";
                body.forEach((e => {
                    if (0 == e.indexOf("product_id="))
                        pId = e.substring(11, e.length);
                    else if (0 == e.indexOf("attribute[") && e.indexOf("]=") + 2 < e.length) {
                        var i = e.indexOf("]");
                        attrs += "{optionEntityId:" + parseInt(e.substring(10, i)) + ",valueEntityId:" + parseInt(e.substring(i + 2, e.length)) + "}"
                    }
                })),
                    attrs += "]",
                    query = "query{site{product(entityId:" + pId + " optionValueIds: " + attrs + "){name sku availabilityV2{status} inventory{isInStock} variants(optionValueIds: " + attrs + "){edges{node{sku entityId}}} }}}";
                try {
                    pId && fetch(bcsn_remote_url + pId, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: data
                    }).catch((function () { })).then((res => res.json())).then((data => {
                        data && data.data && (bcsn_remoteData = data, setTimeout(cbStockNotifyForm(!1 === data.data.purchasable), 2e3))
                    })).catch((function () { }))
                } catch (err) { }
                bcsn_base_url != baseUrl2 && pId && fetch(bcsn_remote_url2 + pId, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: data
                }).catch((function () { })).then((res => res.json())).then((data => {
                    data && data.data && (bcsn_remoteData = data, setTimeout(cbStockNotifyForm(!1 === data.data.purchasable), 2e3))
                })).catch((function () { }))
            }

            function cbStockNotifyMe() {
                bcsn_blacklisted.includes($("#bcsn_email").val()) && cbStockNotifyFail("error");
                var data = cf.serialize();
                $("dl").find('*[itemprop="sku"]') && $("dl").find('*[itemprop="sku"]').length > 0 && (data = data + "&sku=" + $("dl").find('*[itemprop="sku"]').html());
                var data2 = "";
                if ($("#bcsn_stockNotifyForm") && (data2 = $("#bcsn_stockNotifyForm").serialize()) && (data += "&" + data2), "" == bcsn_channelId || "1" == bcsn_channelId ? data += "&channelId=1" : data += "&channelId=" + bcsn_channelId, bcsn_remoteData && bcsn_remoteData.data)
                    data += "&variantId=" + bcsn_remoteData.data.v3_variant_id;
                else if (bcsn_graphqlData && bcsn_graphqlData.data)
                    try {
                        data += "&variantId=" + bcsn_graphqlData.data.site.product.variants.edges[0].node.entityId
                    } catch (err) { }
                try {
                    (data = cbStockNotifyPost(data)) && $.post(post, data).done((function (value) {
                        200 === value.code ? cbStockNotifySuccess(data) : cbStockNotifyFail(data)
                    })).fail((function () {
                        cbStockNotifyFail(data)
                    }))
                } catch (err) { }
            }

            function cbStockNotifyMeWP() {
                var data = cf.serialize(),
                    pid = $(currentBody).find("[data-js='bc-product-pricing']").data("product-price-id");
                $(currentBody).find("[data-js='variant_id']").val();
                $("dl").find('*[itemprop="sku"]') && (data = data + "&sku=" + $("dl").find('*[itemprop="sku"]').html()),
                    data = data + "&product_id=" + pid;
                var data2 = "";
                $("#bcsn_stockNotifyForm") && (data2 = $("#bcsn_stockNotifyForm").serialize()) && (data += "&" + data2);
                try {
                    (data = cbStockNotifyPost(data)) && $.post(post, data).done((function (value) {
                        200 === value.code ? cbStockNotifySuccess(data) : cbStockNotifyFail(data)
                    })).fail((function () {
                        cbStockNotifyFail(data)
                    }))
                } catch (err) { }
            }

            function cbStockNotifyLoad(data) {
                onLoad(data)
            }

            function cbStockNotifyLoaded(data) {
                onLoaded(data)
            }

            function cbStockNotifyPost(data) {
                return onPost(data)
            }

            function cbStockNotifySuccess(data) {
                return onSuccess(data)
            }

            function cbStockNotifyFail(data) {
                return onFail(data)
            }

            function cbIsEmail(value) {
                return !bcsn_blacklisted.includes(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            }

            $(document).ready((function () {
                var state = document.readyState;
                try {
                    ("interactive" == state || "complete" == state) && (modalEnabled && bcsn_registerObserve(), bcsn_init())
                } catch (err) { }
            })),
                $(window).on("beforeunload", (function () {
                    if (modalObserver)
                        try {
                            modalObserver.disconnect()
                        } catch (err) { }
                    if (modalObserver2)
                        try {
                            modalObserver2.disconnect()
                        } catch (err) { }
                })),
                bcsn_deregisterObserve = function () {
                    modalObserver.disconnect(),
                        modalObserver2 && modalObserver2.disconnect()
                },
                bcsn_registerObserve = function () {
                    const callback = function (mutationsList, modalObserver) {
                        setTimeout(bcsn_reinit(), 1e3),
                            setTimeout(bcsn_reinit(), 2e3)
                    };
                    if ("visible" == $(modal).css("visibility")) {
                        const config2 = {
                            attributes: !0,
                            attributeFilter: ["style", "class"],
                            attributeOldValue: !0
                        };
                        (modalObserver2 = new MutationObserver(callback)).observe($(modal)[0], config2)
                    } else {
                        const config = {
                            attributes: !0,
                            childList: !0
                        };
                        modalObserver = new MutationObserver(callback),
                            $(modal).find('[class="modal-content"]')[0] && modalObserver.observe($(modal).find('[class="modal-content"]')[0], config)
                    }
                },
                bcsn_isQuickView = function () {
                    return $(modal + " div").hasClass("quickView")
                },
                bcsn_reinit = function () {
                    bcsn_isQuickView() && ("visible" == $(modal).css("visibility") ? currentBody = modal : (currentBody = body, $(modal).find('[class="modal-content"]') && $(modal).find('[class="modal-content"]').length > 0 && $(modal).find('[class="modal-content"]').empty()), bcsn_init())
                },
                bcsn_checkPreOrder = function () {
                    var ele = $("body").find('input[value="' + bcsn_preorderLabel + '"]', cf);
                    ele && 0 !== ele.length || (ele = $("body").find('button:contains("' + bcsn_preorderLabel + '")', cf)),
                        ele && ele.length > 0 && (cbStockNotifyForm(!0), $("#bcsn_formDiv").css("display", "block"))
                },
                cbStockNotifyForm = function (b) {
                    console.log("cbStockNotifyForm");
                    console.log(b);
                    if (!bcsn_disable) {
                        bcsn_formDisplay = b;
                        try {
                            cbStockNotifyLoad(b);
                        } catch (err) { }
                        if (bcsn) {
                            bcsn_formDisplay ? (bcsn.css("display", "block"), bcsn_recaptchaSiteKey && bcsn_recaptchaSiteKey.trim().length > 0 && bcsn_recaptchaCallback(), (formFocus || "true" === formFocus) && (window.location.hash = null, window.location.hash = bcsnName)) : bcsn.css("display", "none");
                        }
                        try {
                            cbStockNotifyLoaded(bcsn_formDisplay)
                        } catch (err) { }
                    }
                };
            var bcsn_recaptchaCallback = function () {
                var pending = !0;
                null != $("#recaptchaV2") && $("#recaptchaV2").length > 0 && (bcsn_performreCaptchaCallback(), pending = !1),
                    setTimeout((function () {
                        pending && null != $("#recaptchaV2") && $("#recaptchaV2").length > 0 && (bcsn_performreCaptchaCallback(), pending = !1)
                    }), 500),
                    setTimeout((function () {
                        pending && null != $("#recaptchaV2") && $("#recaptchaV2").length > 0 && (bcsn_performreCaptchaCallback(), pending = !1)
                    }), 1e3),
                    setTimeout((function () {
                        pending && null != $("#recaptchaV2") && $("#recaptchaV2").length > 0 && (bcsn_performreCaptchaCallback(), pending = !1)
                    }), 2e3)
            },
                bcsn_performreCaptchaCallback = function () {
                    bcsn_recaptchaSiteKey && bcsn_recaptchaSiteKey.trim().length > 0 && grecaptcha.render("recaptchaV2", {
                        sitekey: bcsn_recaptchaSiteKey,
                        callback: bcsn_verifyCallback
                    })
                },
                bcsn_verifyCallback = function (response) {
                    $("#recaptchaToken").val(response),
                        $("#bcsn_formSubmitButton").css("display", "block"),
                        $("#bcsn_formSubmitButton").attr("disabled", !1)
                },
                bcsn_validForm = function () {
                    let valid = !0,
                        data = cf.serialize();
                    data = new URLSearchParams(data);
                    let fields = {};
                    return $("body").find("[" + cartFormAtt + "]").find('*[required=""]').map((function () {
                        fields[$(this).attr("name")] || (fields[$(this).attr("name")] = !0)
                    })), Object.keys(fields).forEach((function (e) {
                        if (null === data.get(e) || "" === data.get(e))
                            return valid = !1, !1
                    })), valid
                };

            function bcsn_removeDisabledOptionWithTimer() {
                bcsn_removeDisabledOption(),
                    setTimeout((function () {
                        bcsn_removeDisabledOption()
                    }), 500),
                    setTimeout((function () {
                        bcsn_removeDisabledOption()
                    }), 1e3)
            }

            function bcsn_removeDisabledOption() {
                for (var options = $("select").find('*[disabled="disabled"]'), i = 0; i < options.length; i++)
                    options[i].removeAttribute("disabled")
            }

            function bcsn_selectOnClick() {
                $("body").find('*[class="form-select form-select--small"]').change(bcsn_removeDisabledOptionWithTimer)
        }
