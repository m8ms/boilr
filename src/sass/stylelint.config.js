module.exports = {
    "extends": [
        "stylelint-config-recommended-scss",
        "stylelint-config-property-sort-order-smacss"
    ],
    "plugins": [
        "stylelint-scss"
    ],
    "ignoreFiles" : [
        __dirname + "/vendor/_normalize.scss"
    ],
    "rules": {
        "rule-empty-line-before": [ "always", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
        } ],
    }
};
