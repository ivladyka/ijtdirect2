   const trustpilot_settings = {
                       page: "{{page_type}}" === "default" ? "landing" : "{{page_type}}",
                            sku: "{{product.sku}}",
                            name: "{{product.title}}",
                                key: "NO0HdD3kXn2oM1VO",
                            product_id: "{{product.id}}" 
                    };
                    const createTrustBoxScript = function() {
                        const trustBoxScript = document.createElement('script');
                        trustBoxScript.src = "https://ecommplugins-scripts.trustpilot.com/v2.1/js/header_bigcommerce.min.js";
                        document.head.appendChild(trustBoxScript);
                    };
                    if (BCData.product_attributes && !BCData.product_attributes.base && "sku" !== 'id') {
                        addEventListener('DOMContentLoaded', () => {
                            const endpoint = "/remote/v1/product-attributes/";
                            stencilUtils.api.productAttributes.makeRequest(endpoint, "GET", {}, {}, function(err, res) {
                                trustpilot_settings.sku = res.data["sku"];
                                createTrustBoxScript();
                            })
                        });
                    } else {
                        createTrustBoxScript();
                    }
