// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: meter/meterdirectory.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Meterdirectory struct {
	DeviceID         string `protobuf:"bytes,1,opt,name=deviceID,proto3" json:"deviceID,omitempty"`
	Barcodeserial    string `protobuf:"bytes,2,opt,name=barcodeserial,proto3" json:"barcodeserial,omitempty"`
	Model            string `protobuf:"bytes,3,opt,name=model,proto3" json:"model,omitempty"`
	Installationdate uint64 `protobuf:"varint,4,opt,name=installationdate,proto3" json:"installationdate,omitempty"`
	Address          string `protobuf:"bytes,5,opt,name=address,proto3" json:"address,omitempty"`
	Ownerlastname    string `protobuf:"bytes,6,opt,name=ownerlastname,proto3" json:"ownerlastname,omitempty"`
	Ownerfirstname   string `protobuf:"bytes,7,opt,name=ownerfirstname,proto3" json:"ownerfirstname,omitempty"`
	Ownerphone       string `protobuf:"bytes,8,opt,name=ownerphone,proto3" json:"ownerphone,omitempty"`
	Gpsjson          string `protobuf:"bytes,9,opt,name=gpsjson,proto3" json:"gpsjson,omitempty"`
	Active           bool   `protobuf:"varint,10,opt,name=active,proto3" json:"active,omitempty"`
	Triphased        bool   `protobuf:"varint,11,opt,name=triphased,proto3" json:"triphased,omitempty"`
	Phasenbmono      uint64 `protobuf:"varint,12,opt,name=phasenbmono,proto3" json:"phasenbmono,omitempty"`
}

func (m *Meterdirectory) Reset()         { *m = Meterdirectory{} }
func (m *Meterdirectory) String() string { return proto.CompactTextString(m) }
func (*Meterdirectory) ProtoMessage()    {}
func (*Meterdirectory) Descriptor() ([]byte, []int) {
	return fileDescriptor_0881bc6cc1a84cde, []int{0}
}
func (m *Meterdirectory) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Meterdirectory) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Meterdirectory.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Meterdirectory) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Meterdirectory.Merge(m, src)
}
func (m *Meterdirectory) XXX_Size() int {
	return m.Size()
}
func (m *Meterdirectory) XXX_DiscardUnknown() {
	xxx_messageInfo_Meterdirectory.DiscardUnknown(m)
}

var xxx_messageInfo_Meterdirectory proto.InternalMessageInfo

func (m *Meterdirectory) GetDeviceID() string {
	if m != nil {
		return m.DeviceID
	}
	return ""
}

func (m *Meterdirectory) GetBarcodeserial() string {
	if m != nil {
		return m.Barcodeserial
	}
	return ""
}

func (m *Meterdirectory) GetModel() string {
	if m != nil {
		return m.Model
	}
	return ""
}

func (m *Meterdirectory) GetInstallationdate() uint64 {
	if m != nil {
		return m.Installationdate
	}
	return 0
}

func (m *Meterdirectory) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Meterdirectory) GetOwnerlastname() string {
	if m != nil {
		return m.Ownerlastname
	}
	return ""
}

func (m *Meterdirectory) GetOwnerfirstname() string {
	if m != nil {
		return m.Ownerfirstname
	}
	return ""
}

func (m *Meterdirectory) GetOwnerphone() string {
	if m != nil {
		return m.Ownerphone
	}
	return ""
}

func (m *Meterdirectory) GetGpsjson() string {
	if m != nil {
		return m.Gpsjson
	}
	return ""
}

func (m *Meterdirectory) GetActive() bool {
	if m != nil {
		return m.Active
	}
	return false
}

func (m *Meterdirectory) GetTriphased() bool {
	if m != nil {
		return m.Triphased
	}
	return false
}

func (m *Meterdirectory) GetPhasenbmono() uint64 {
	if m != nil {
		return m.Phasenbmono
	}
	return 0
}

func init() {
	proto.RegisterType((*Meterdirectory)(nil), "electra.meter.Meterdirectory")
}

func init() { proto.RegisterFile("meter/meterdirectory.proto", fileDescriptor_0881bc6cc1a84cde) }

var fileDescriptor_0881bc6cc1a84cde = []byte{
	// 323 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x91, 0xcf, 0x4a, 0x2b, 0x31,
	0x18, 0xc5, 0x9b, 0xdb, 0xff, 0x5f, 0x6f, 0xcb, 0x25, 0xdc, 0x7b, 0x09, 0x45, 0xc2, 0x20, 0x22,
	0xc5, 0x45, 0x67, 0xe1, 0x1b, 0x88, 0x1b, 0x17, 0x6e, 0xba, 0x74, 0x97, 0x4e, 0x3e, 0x6d, 0x64,
	0x26, 0x19, 0x92, 0x50, 0xed, 0x4b, 0x88, 0x8f, 0xe5, 0xb2, 0x4b, 0x97, 0xd2, 0xbe, 0x88, 0xf4,
	0x9b, 0x51, 0x5b, 0xdd, 0x84, 0x9c, 0xdf, 0x39, 0x84, 0x13, 0x0e, 0x8c, 0x0b, 0x8c, 0xe8, 0x53,
	0x3a, 0xb5, 0xf1, 0x98, 0x45, 0xe7, 0x57, 0xd3, 0xd2, 0xbb, 0xe8, 0xf8, 0x10, 0x73, 0xcc, 0xa2,
	0x57, 0x53, 0x72, 0x8f, 0x9f, 0x9a, 0x30, 0xba, 0x3e, 0xc8, 0xf1, 0x31, 0xf4, 0x34, 0x2e, 0x4d,
	0x86, 0x57, 0x97, 0x82, 0x25, 0x6c, 0xd2, 0x9f, 0x7d, 0x6a, 0x7e, 0x02, 0xc3, 0xb9, 0xf2, 0x99,
	0xd3, 0x18, 0xd0, 0x1b, 0x95, 0x8b, 0x5f, 0x14, 0x38, 0x84, 0xfc, 0x2f, 0xb4, 0x0b, 0xa7, 0x31,
	0x17, 0x4d, 0x72, 0x2b, 0xc1, 0xcf, 0xe0, 0x8f, 0xb1, 0x21, 0xaa, 0x3c, 0x57, 0xd1, 0x38, 0xab,
	0x55, 0x44, 0xd1, 0x4a, 0xd8, 0xa4, 0x35, 0xfb, 0xc1, 0xb9, 0x80, 0xae, 0xd2, 0xda, 0x63, 0x08,
	0xa2, 0x4d, 0x6f, 0x7c, 0xc8, 0x5d, 0x03, 0xf7, 0x60, 0xd1, 0xe7, 0x2a, 0x44, 0xab, 0x0a, 0x14,
	0x9d, 0xaa, 0xc1, 0x01, 0xe4, 0xa7, 0x30, 0x22, 0x70, 0x6b, 0x7c, 0x1d, 0xeb, 0x52, 0xec, 0x1b,
	0xe5, 0x12, 0x80, 0x48, 0xb9, 0x70, 0x16, 0x45, 0x8f, 0x32, 0x7b, 0x64, 0xd7, 0xe3, 0xae, 0x0c,
	0xf7, 0xc1, 0x59, 0xd1, 0xaf, 0x7a, 0xd4, 0x92, 0xff, 0x87, 0x8e, 0xca, 0xa2, 0x59, 0xa2, 0x80,
	0x84, 0x4d, 0x7a, 0xb3, 0x5a, 0xf1, 0x23, 0xe8, 0x47, 0x6f, 0xca, 0x85, 0x0a, 0xa8, 0xc5, 0x80,
	0xac, 0x2f, 0xc0, 0x13, 0x18, 0xd0, 0xcd, 0xce, 0x0b, 0x67, 0x9d, 0xf8, 0x4d, 0xdf, 0xdf, 0x47,
	0x17, 0xe9, 0xcb, 0x46, 0xb2, 0xf5, 0x46, 0xb2, 0xb7, 0x8d, 0x64, 0xcf, 0x5b, 0xd9, 0x58, 0x6f,
	0x65, 0xe3, 0x75, 0x2b, 0x1b, 0x37, 0xff, 0xea, 0xe5, 0xd2, 0xc7, 0x6a, 0xd9, 0x34, 0xae, 0x4a,
	0x0c, 0xf3, 0x0e, 0xed, 0x7a, 0xfe, 0x1e, 0x00, 0x00, 0xff, 0xff, 0x9c, 0x91, 0x81, 0xa1, 0xf5,
	0x01, 0x00, 0x00,
}

func (m *Meterdirectory) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Meterdirectory) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Meterdirectory) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Phasenbmono != 0 {
		i = encodeVarintMeterdirectory(dAtA, i, uint64(m.Phasenbmono))
		i--
		dAtA[i] = 0x60
	}
	if m.Triphased {
		i--
		if m.Triphased {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x58
	}
	if m.Active {
		i--
		if m.Active {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x50
	}
	if len(m.Gpsjson) > 0 {
		i -= len(m.Gpsjson)
		copy(dAtA[i:], m.Gpsjson)
		i = encodeVarintMeterdirectory(dAtA, i, uint64(len(m.Gpsjson)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.Ownerphone) > 0 {
		i -= len(m.Ownerphone)
		copy(dAtA[i:], m.Ownerphone)
		i = encodeVarintMeterdirectory(dAtA, i, uint64(len(m.Ownerphone)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.Ownerfirstname) > 0 {
		i -= len(m.Ownerfirstname)
		copy(dAtA[i:], m.Ownerfirstname)
		i = encodeVarintMeterdirectory(dAtA, i, uint64(len(m.Ownerfirstname)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Ownerlastname) > 0 {
		i -= len(m.Ownerlastname)
		copy(dAtA[i:], m.Ownerlastname)
		i = encodeVarintMeterdirectory(dAtA, i, uint64(len(m.Ownerlastname)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintMeterdirectory(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0x2a
	}
	if m.Installationdate != 0 {
		i = encodeVarintMeterdirectory(dAtA, i, uint64(m.Installationdate))
		i--
		dAtA[i] = 0x20
	}
	if len(m.Model) > 0 {
		i -= len(m.Model)
		copy(dAtA[i:], m.Model)
		i = encodeVarintMeterdirectory(dAtA, i, uint64(len(m.Model)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Barcodeserial) > 0 {
		i -= len(m.Barcodeserial)
		copy(dAtA[i:], m.Barcodeserial)
		i = encodeVarintMeterdirectory(dAtA, i, uint64(len(m.Barcodeserial)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.DeviceID) > 0 {
		i -= len(m.DeviceID)
		copy(dAtA[i:], m.DeviceID)
		i = encodeVarintMeterdirectory(dAtA, i, uint64(len(m.DeviceID)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintMeterdirectory(dAtA []byte, offset int, v uint64) int {
	offset -= sovMeterdirectory(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Meterdirectory) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DeviceID)
	if l > 0 {
		n += 1 + l + sovMeterdirectory(uint64(l))
	}
	l = len(m.Barcodeserial)
	if l > 0 {
		n += 1 + l + sovMeterdirectory(uint64(l))
	}
	l = len(m.Model)
	if l > 0 {
		n += 1 + l + sovMeterdirectory(uint64(l))
	}
	if m.Installationdate != 0 {
		n += 1 + sovMeterdirectory(uint64(m.Installationdate))
	}
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovMeterdirectory(uint64(l))
	}
	l = len(m.Ownerlastname)
	if l > 0 {
		n += 1 + l + sovMeterdirectory(uint64(l))
	}
	l = len(m.Ownerfirstname)
	if l > 0 {
		n += 1 + l + sovMeterdirectory(uint64(l))
	}
	l = len(m.Ownerphone)
	if l > 0 {
		n += 1 + l + sovMeterdirectory(uint64(l))
	}
	l = len(m.Gpsjson)
	if l > 0 {
		n += 1 + l + sovMeterdirectory(uint64(l))
	}
	if m.Active {
		n += 2
	}
	if m.Triphased {
		n += 2
	}
	if m.Phasenbmono != 0 {
		n += 1 + sovMeterdirectory(uint64(m.Phasenbmono))
	}
	return n
}

func sovMeterdirectory(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozMeterdirectory(x uint64) (n int) {
	return sovMeterdirectory(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Meterdirectory) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMeterdirectory
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Meterdirectory: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Meterdirectory: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DeviceID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DeviceID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Barcodeserial", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Barcodeserial = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Model", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Model = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Installationdate", wireType)
			}
			m.Installationdate = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Installationdate |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Ownerlastname", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Ownerlastname = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Ownerfirstname", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Ownerfirstname = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Ownerphone", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Ownerphone = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Gpsjson", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Gpsjson = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Active", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Active = bool(v != 0)
		case 11:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Triphased", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Triphased = bool(v != 0)
		case 12:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Phasenbmono", wireType)
			}
			m.Phasenbmono = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Phasenbmono |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipMeterdirectory(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthMeterdirectory
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipMeterdirectory(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMeterdirectory
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowMeterdirectory
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthMeterdirectory
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupMeterdirectory
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthMeterdirectory
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthMeterdirectory        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMeterdirectory          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupMeterdirectory = fmt.Errorf("proto: unexpected end of group")
)