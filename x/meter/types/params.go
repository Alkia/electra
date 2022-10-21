package types

import (
	"fmt"

	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeyMaxBillingIteration = []byte("MaxBillingIteration")
	// TODO: Determine the default value
	DefaultMaxBillingIteration uint64 = 0
)

var (
	KeyModuleParamBestForCustomer = []byte("ModuleParamBestForCustomer")
	// TODO: Determine the default value
	DefaultModuleParamBestForCustomer bool = false
)

var (
	KeyPayAutomatically = []byte("PayAutomatically")
	// TODO: Determine the default value
	DefaultPayAutomatically bool = false
)

var (
	KeyBillingAdmin = []byte("BillingAdmin")
	// TODO: Determine the default value
	DefaultBillingAdmin string = "billing_admin"
)

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

// NewParams creates a new Params instance
func NewParams(
	maxBillingIteration uint64,
	moduleParamBestForCustomer bool,
	payAutomatically bool,
	billingAdmin string,
) Params {
	return Params{
		MaxBillingIteration:        maxBillingIteration,
		ModuleParamBestForCustomer: moduleParamBestForCustomer,
		PayAutomatically:           payAutomatically,
		BillingAdmin:               billingAdmin,
	}
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		DefaultMaxBillingIteration,
		DefaultModuleParamBestForCustomer,
		DefaultPayAutomatically,
		DefaultBillingAdmin,
	)
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyMaxBillingIteration, &p.MaxBillingIteration, validateMaxBillingIteration),
		paramtypes.NewParamSetPair(KeyModuleParamBestForCustomer, &p.ModuleParamBestForCustomer, validateModuleParamBestForCustomer),
		paramtypes.NewParamSetPair(KeyPayAutomatically, &p.PayAutomatically, validatePayAutomatically),
		paramtypes.NewParamSetPair(KeyBillingAdmin, &p.BillingAdmin, validateBillingAdmin),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateMaxBillingIteration(p.MaxBillingIteration); err != nil {
		return err
	}

	if err := validateModuleParamBestForCustomer(p.ModuleParamBestForCustomer); err != nil {
		return err
	}

	if err := validatePayAutomatically(p.PayAutomatically); err != nil {
		return err
	}

	if err := validateBillingAdmin(p.BillingAdmin); err != nil {
		return err
	}

	return nil
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

// validateMaxBillingIteration validates the MaxBillingIteration param
func validateMaxBillingIteration(v interface{}) error {
	maxBillingIteration, ok := v.(uint64)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	// TODO implement validation
	_ = maxBillingIteration

	return nil
}

// validateModuleParamBestForCustomer validates the ModuleParamBestForCustomer param
func validateModuleParamBestForCustomer(v interface{}) error {
	moduleParamBestForCustomer, ok := v.(bool)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	// TODO implement validation
	_ = moduleParamBestForCustomer

	return nil
}

// validatePayAutomatically validates the PayAutomatically param
func validatePayAutomatically(v interface{}) error {
	payAutomatically, ok := v.(bool)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	// TODO implement validation
	_ = payAutomatically

	return nil
}

// validateBillingAdmin validates the BillingAdmin param
func validateBillingAdmin(v interface{}) error {
	billingAdmin, ok := v.(string)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	// TODO implement validation
	_ = billingAdmin

	return nil
}
